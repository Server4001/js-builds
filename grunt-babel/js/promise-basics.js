var promise = new Promise(function(resolve, reject) {
    $.ajax({
        type: "post",
        url: "/endpoint.json",
        dataType: "json"
    }).done(function(data) {
        if (data.status !== "success") {
            reject(Error(data.message));
        }
        else {
            resolve(data.data);
        }
    }).fail(function() {
        reject(Error("The request failed."));
    });
});

promise.then(function(data) {
    console.log(data.first_name);
}, function(error) {
    console.error(error.message);
});

// If we only care about when the promise is rejected, we can use .catch:
promise.catch(function(error) {
    // This will only fire when the promise is rejected.
    console.error(error.message);
});

// Example of a promise that returns a promise:
let insidePromise = new Promise(function(resolve, reject) {
    resolve(3);
});
let outsidePromise = new Promise(function(resolve, reject) {
    resolve(insidePromise);
});

// Even though the outside promise returns a promise, the results will be the results of the inside promise.
outsidePromise.then(function(data) {
    console.log(data); //> 3
});

// Promise has a static resolve method. Note that this gets logged before anything else, because the promise is
// immediately resolved:
let staticPromiseCall = Promise.resolve(5);
staticPromiseCall.then(function(data) {
    console.log(data); //> 5
});

// There is also a static reject:
let anotherStaticPromiseCall = Promise.reject(Error('oh noes!'));

// When chaining thens, if you return a static value, the next then will take it as the data parameter:
let chain1 = new Promise(function(resolve, reject) {
    resolve(1)
});
chain1.then(function(data) {
    console.log(data); //> 1
    return data + 2;
}).then(function(data) { // Here, data is the result of the previous then.
    console.log(data); //> 3
});

// When chaining thens, if you instead return something promise-like, the next then waits on it, and is called only
// when that promise succeeds or fails.
let anotherAjax = new Promise(function(resolve, reject) {
    $.ajax({
        type: "post",
        url: "/another_endpoint.json",
        dataType: "json"
    }).done(function(data) {
        if (data.status !== "success") {
            reject(Error(data.message));
        }
        else {
            resolve(data.data);
        }
    }).fail(function() {
        reject(Error("The request failed."));
    });
});
promise.then(function(data) { // Remember, this is the first promise, at the top.
    return anotherAjax;
}).then(function(data) {
    // Here, data is the result of anotherAjax (the results of /another_endpoint.json).
   console.log(data.this_is); //> "another endpoint"
});

// Promise.all makes a promise that fulfills when every item in an array fulfills, and rejects if any item rejects.
// Each array item is passed to Promise.resolve, so the array can be a mixture of promise-like objects and other
// objects. The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first
// rejection value.
let promisesArray = [
    promise,
    anotherAjax,
    promise
];
Promise.all(promisesArray).then(function(data) {
    console.log(data); //> [{first_name: ...}, {this_is: ...}, {first_name: ...}]
});

// Promise.race is like Promise.all, in that it takes an array of Promises, BUT it resolve as soon as ONE of the
// promises in the array either resolves or rejects.
Promise.race(promisesArray).then(function(data) {
    console.log(data); //> {first_name: "Brice Bentler, ...}
});
