// Supported in ES5:
// Decimal:
var a = 10;
// Hexadecimal:
var hexd = 0xa; // Hex: a, Dec: 10
// Octal:
// var oct = 071; // This does not fly in es6.

// ES6 supports:
// Octal (with new syntax):
let oct = 0o71; // Decimal: 57
// Binary:
let bin = 0b1101; // Decimal: 13

console.log(parseInt("0xa", 16)); //> 10, CORRECT
console.log(parseInt("0o71", 8)); //> 0, INCORRECT
console.log(parseInt("0b1101", 2)); //> 0, INCORRECT

// parseint() does not work with the new syntax for binary and octal numbers. Instead, use Number:
console.log(Number(0xa)); //> 10, CORRECT
console.log(Number("0xa")); //> 10, CORRECT

console.log(Number(0o71)); // 57, CORRECT
console.log(Number("0o71")); // 57, CORRECT

console.log(Number(0b1101)); // 13, CORRECT
console.log(Number("0b1101")); // 13, CORRECT

// Number also has parseInt and parseFloat, in an attempt to clean up global funciton use:
console.log(Number.parseInt("5")); //> 5
console.log(Number.parseFloat("5.567")); //> 5.567

// Number also has isFinite and isNaN. But, it does not run any conversions like the global function does.
console.log(isFinite("1")); //> truez
console.log(Number.isFinite("1")); //> false
console.log(isNaN("NaN")); //> true
console.log(Number.isNaN("NaN")); //> false

// isInteger:
console.log(Number.isInteger(1)); //> true
console.log(Number.isInteger(1.0)); //> true
console.log(Number.isInteger(1.5)); //> false

// Constants for determining the min an max safe value for an integer in JavaScript:
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// isSafeInteter:
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); //> true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); //> true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); //> false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); //> false

