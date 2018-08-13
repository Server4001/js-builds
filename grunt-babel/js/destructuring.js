let x = 2;
let y = 3;

// It is important to understand that on the right, there is an array containing y and x. But on the left, this is
// just notation, not an array literal.
[x, y] = [y, x];

console.log(x); //> 3
console.log(y); //> 2

// You could also just pass in an array of numbers:
let [a, b] = [3, 2];

// Or use the results of a function:
let doWork = function() {
    return ["string1", "string2"];
};
let [c, d] = doWork();
console.log(c); //> "string1"
console.log(d); //> "string2"

// If there are mismatched numbers of arguments, it will start at the beginning:
let [e, f] = [1, 2, 3];
console.log(e); //> 1
console.log(f); //> 2

// If you do not want to start at the beginning, use a comma (like in PHP's list()):
let [, g, h] = [12, 13, 14];
console.log(g); //> 13
console.log(h); //> 14

// If you reference something that does not exist, you will get undefined:
let [, i] = [5];
console.log(i); //> undefined

// You can also use objects:
let doWork2 = function() {
    return {
        firstName: "Brice",
        lastName: "Bentler",
        twitter: "server4001"
    };
};
// We are NOT defining an object here. We are defining variables.
let {firstName: name, twitter: twitterHandle} = doWork2();
console.log(name); //> Brice
console.log(twitterHandle); //> server4001

// You can even use nested objects:
let doWork3 = function() {
    return {
        name: "Brice Bentler",
        handles: {
            facebook: "brice.bentler",
            twitter: "server4001"
        }
    };
};
let {
    name: myName,
    handles: {
        twitter: myTwitterHandle
    }
} = doWork3();
console.log(myName); //> Brice Bentler
console.log(myTwitterHandle); //> server4001

// As always, with ES6, if your variable name is the same as the property name, you do not need both:
let { anotherThing } = { something: "yes", anotherThing: "no" };
console.log(anotherThing); //> "no"
// Or with both properties:
let { bananas, apples } = { apples: "yes", bananas: "no" };

// Finally, you can use this when defining a function, when referencing it's parameters:
let doWork4 = function(url, {data, cache, headers}) {
    return data;
};
// Imagine that in ES5, this function looked like:
// function(url, config) { // config would look like: {data: ..., cache: ..., headers: ...}
//      return config.data;
// }
let result = doWork4("api/test", {
    data: "test",
    cache: true
});
console.log(result); //> "test"
