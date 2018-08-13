// NOTE: This is an ES7 strawman proposal. It could be removed from ES7 at any given time.

let squares = [for (n of [1, 2, 3]) n * n];
console.log(squares); //> [1, 4, 9]

let squaresLargerThan1 = [for (n of [1, 2, 3]) if (n > 1) n * n];
console.log(squaresLargerThan1); //> [4, 9]
