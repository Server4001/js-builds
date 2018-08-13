// The old way, which leads to callback hell.
/**
console.log("start");
oldPause(500, function() {
    console.log("middle");
    oldPause(500, function() {
        console.log("end");
    });
});
function oldPause(delay, callback) {
    setTimeout(function() {
        console.log(`Paused for ${delay} ms.`);
        callback();
    }, delay);
}
*/

// We can avoid crazy levels of nesting by using a generator.
function* main() {
    console.log("start");
    yield pause(500);
    console.log("middle");
    yield pause(500);
    console.log("end");
}

(function() {
    let sequence;
    let run = function(generator) {
        sequence = generator();
        let next = sequence.next();
    };

    let resume = function() {
        sequence.next();
    };

    window.async = {
        run,
        resume
    }
})();

//async.run(main); // Uncomment to see the code work

function pause(delay) {
    setTimeout(function() {
        console.log(`Paused for ${delay} ms`);
        async.resume();
    }, delay);
}

// ======================================================
// Another async generator example where data is returned
// ======================================================
function* main2() {
    let price = yield getStockPrice();
    if (price > 45) {
        console.log(`Price $${price} over $45, starting trade.`);
        yield executeTrade();
    }
    else {
        console.log("Trade not made");
    }
}

(function() {
    let sequence;
    let run = function(generator) {
        sequence = generator();
        let next = sequence.next();
    };

    let resume = function(value) {
        sequence.next(value);
    };

    window.async2 = {
        run,
        resume
    }
})();

async2.run(main2);

function getStockPrice() {
    $.get('/endpoints/prices.php?symbol=MSFT', function(response) {
        async2.resume(response.data.price);
    });
}

function executeTrade() {
    // Pretend we are POSTing to an endpoint.
    setTimeout(function() {
        console.log("Trade completed!");
        async2.resume();
    }, 500);
}

// ======================================================
// Same example as above, but with error handling
// ======================================================
function* main3() {
    try {
        let price = yield getStockPrice3();
        if (price > 45) {
            console.log(`Price $${price} over $45, starting trade.`);
            yield executeTrade3();
        }
        else {
            console.log("Trade not made");
        }
    }
    catch (ex) {
        console.log(`Error: ${ex.message}`);
    }
}

(function() {
    let sequence;
    let run = function(generator) {
        sequence = generator();
        let next = sequence.next();
    };

    let resume = function(value) {
        sequence.next(value);
    };

    // Similar to how .next() works, .throw() causes the generator to throw an exception.
    let fail = function(reason) {
        sequence.throw(reason);
    };

    window.async3 = {
        run,
        resume,
        fail
    }
})();

async3.run(main3);

function getStockPrice3() {
    $.get('/endpoints/prices.php?symbol=MSFT', function(response) {
        try {
            throw Error("There was a problem");
            async3.resume(response.data.price);
        }
        catch (ex) {
            async3.fail(ex);
        }
    });
}

function executeTrade3() {
    // Pretend we are POSTing to an endpoint.
    setTimeout(function() {
        console.log("Trade completed!");
        async3.resume();
    }, 500);
}

// ======================================================
// An example of using both async generators and promises
// ======================================================
function* mainPromise() {
    try {
        let price = yield getStockPricePromise();
        if (price > 45) {
            console.log(`Price $${price} over $45, starting trade.`);
            yield executeTradePromise();
        }
        else {
            console.log("Trade not made");
        }
    }
    catch (ex) {
        console.log(`Error: ${ex.message}`);
    }
}

(function() {
    let run = function(generator) {
        let sequence;

        let process = function(result) {
            if (!result.done) {
                result.value.then(function(value) {
                    process(sequence.next(value));
                }, function(error) {
                    process(sequence.throw(error));
                });
            }
        };

        sequence = generator();
        let next = sequence.next();
        process(next);
    };

    window.asyncPromise = {
        run
    }
})();

asyncPromise.run(mainPromise);

function getStockPricePromise() {
    return new Promise(function(resolve, reject) {
        $.get('/endpoints/prices.php?symbol=MSFT', function(response) {
            resolve(124.45);
        }).fail(function() {
            reject(Error("Unable to hit stock prices endpoint."));
        });
    });
}

function executeTradePromise() {
    return new Promise(function(resolve, reject) {
        // Pretend we are POSTing to an endpoint.
        setTimeout(function() {
            console.log("Trade completed!");
            //resolve();
            reject(Error("Testing error handling functionality."));
        }, 500);
    });
}

