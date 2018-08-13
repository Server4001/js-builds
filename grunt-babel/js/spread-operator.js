// When used outside of a function's parameter list, the ... operator means we want to "spread" an array across
// individual parameters.
let doWork = function(a, b, c) {
    return a + b + c;
};
console.log(doWork(...[5, 10, 15])); //> 30

// You can also use the spread operator to build an array:
let a = [4, 5, 6];
let b = [1, 2, 3, ...a, 7, 8, 9];
console.log(b); //> [1, 2, 3, 4, 5, 6, 7, 8, 9]
