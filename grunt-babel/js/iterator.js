let numbers = [1,2,3,4];
let iterator = numbers[Symbol.iterator]();
let next = iterator.next();

let sum = 0;
while (!next.done) {
    sum += next.value;
    next = iterator.next();
}

console.log(sum); //> 10

// Another example (requires browser-polyfill.js from babel-core):
let arr = [1,2,3,4,5];
let it = arr.values();
let nxt = it.next();

while (!nxt.done) {
    console.log(nxt.value);
    nxt = it.next();
}

// Defining a custom iterator which will take an argument in the next() method.
let range = function(start, end) {
    let current = start;
    let firstIteration = true;

    return {
        next(delta = 1) {
            let result = { value: undefined, done: true };

            if (!firstIteration) {
                current += delta;
            }
            if (current <= end) {
                result.value = current;
                result.done = false;
            }

            firstIteration = false;
            return result;
        }
    };
};
let result = [];
let iterator2 = range(1, 10);
let next2 = iterator2.next();
while (!next2.done) {
    result.push(next2.value);
    next2 = iterator2.next(2);
}
console.log(result); //> [1, 3, 5, 7, 9]
