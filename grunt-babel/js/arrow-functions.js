let add = (x, y) => x + y;
console.log(add(1, 2)); //> 3

// If there is only 1 parameter, you do not need the parens:
let square = x => x * x;
console.log(square(5)); //> 25

// If there are no params, you DO need the parens:
let three = () => 3;
console.log(three()); //> 3

// If you need multiple lines, use curly braces:
let sub = (x, y) => {
    let results = x - y;

    return results; // Note that when there are brackets, you must use return.
};
console.log(sub(1, 2)); //> -1

// An example of using an arrow function with array.forEach:
let arr = [1, 2, 3, 4];
// Instead of:
//  var sum = 0;
//  arr.forEach(function(number, i) {
//      sum += number;
//  });
// Use:
let sum = 0;
arr.forEach(n => sum += n);
console.log(sum); //> 10

// An example of using an arrow function to double all numbers in an array using array.map:
let doubled = arr.map(n => 2 * n);
console.log(doubled); //> [2, 4, 6, 8]
