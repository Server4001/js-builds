// Trig functions new to ES6:
// Hyperbolic acosine:
console.log(Math.acosh(1));
console.log(Math.asinh(0));
console.log(Math.atanh(0));

// Hyperbolic cosine:
console.log(Math.cosh(0));
console.log(Math.sinh(0));
console.log(Math.tanh(0));

// Cube root
console.log(Math.cbrt(729)); //> 9

// Get the number of leading zeros in a 32-bit representation of a number with clz32:
console.log(Math.clz32(5)); // 5 in binary is 101. This takes 3 digits. 32 - 3 = 29.

// log1p gets the natural logarithm of a number plus 1:
console.log(Math.log1p(35));

// Log base 10 and base 2:
console.log(Math.log10(100));
console.log(Math.log2(32));

// Find the hypotenuse of a triangle with hypot:
console.log(Math.hypot(3, 4)); //> 5 (3^2 + 4^2 = 5^2)

// Find the closest value that JavaScript will use to represent a number:
console.log(Math.fround(2.888));

// Get the sign (not sine) of a number. Returns 1 for positive, -1 for negative, and 0 if the number is 0:
console.log(Math.sign(1421)); //> 1
console.log(Math.sign(0)); //> 0
console.log(Math.sign(-57)); //> -1

// Remove the decimal portion of a number with .trunc(). Different from floor, as .trunc will round negative numbers up.
console.log(Math.trunc(3.229)); //> 3
console.log(Math.trunc(-52.887)); //> -52
