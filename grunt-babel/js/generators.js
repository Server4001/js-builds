// NOTE: Generators require the use of: node_modules/grunt-babel/node_modules/babel-core/browser-polyfill.js

let numbers = function*(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
};

let sum = 0;
let iterator = numbers(1, 4);
let next = iterator.next();

while (!next.done) {
    sum += next.value;
    next = iterator.next();
}

console.log(sum); //> 10

// You can also use a for-of instead of an iterator:
let sum2 = 0;
for (let i of numbers(1, 5)) {
    sum2 += i;
}
console.log(sum2); //> 15

// You can pass an argument into the iterator's next() method:
let range = function*(start, end) {
    let current = start;
    while (current <= end) {
        let delta = yield current; // If you pass an argument into next(), it will be returned from yield.
        current+= delta || 1;
    }
};

let result = [];
let iterator2 = range(1, 10);
let next2 = iterator2.next();
while (!next2.done) {
    result.push(next2.value);
    next2 = iterator2.next(2);
}
console.log(result); //> [1, 3, 5, 7, 9]


// Example of a named generator:
function* main() {
    yield 5;
}


// Example of generators calling other generators
function* callee() {
    yield 1;
}
function* caller() {
    while (true) {
        yield* callee();
    }
}
const callerCallee = caller();
console.log(callerCallee.next()); // {value: 1, done: false}
console.log(callerCallee.next()); // {value: 1, done: false}
console.log(callerCallee.next()); // {value: 1, done: false}
console.log(callerCallee.next()); // {value: 1, done: false}
