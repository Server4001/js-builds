// NOTE: Proxies currently only work with Firefox.

// ==============================
// Proxying objects:
// ==============================
// Proxies allow us to intercept operations done on objects.
// Proxies do not modify the object itself. Instead, they create a new object which acts as a wrapper around the
// original object, so you must access the proxy object, not the original object.

let unicorn = {
    legs: 4,
    color: "brown",
    horn: true
};

// Let's way that whenever we get the color, we want to return the word "Awesome" and the color.
// The proxy constructor takes 2 args. The original object (target), and an object literal which represents which
// operations we want to handle.
let proxyUnicorn = new Proxy(unicorn, {
    get: function(target, propName) {
        if (propName === 'color') {
            return 'Awesome ' + target[propName];
        }

        return target[propName];
    },
    set: function(target, propName, value) {
        // You should not be able to set horn to false.
        if (propName === 'horn' && value === false) {
            console.log("A unicorn is never without it's horn...");
            return this;
        }

        target[propName] = value;
        return this;
    }
});

console.log(proxyUnicorn.legs); //> 4
console.log(proxyUnicorn.horn); //> true
console.log(proxyUnicorn.color); //> "Awesome brown"

proxyUnicorn.horn = false;
proxyUnicorn.legs = 5;
console.log(proxyUnicorn.horn); //> true
console.log(proxyUnicorn.legs); //> 5

// Other things you can do w/ proxies:
// - Intercept calls to delete properties
// - Intercept calls to the define property function
// - Calls to freeze or seal an object
// - When the in operator is used
// - Iterations using for...in

