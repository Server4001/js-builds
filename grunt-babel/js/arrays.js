// These array methods do NOT require compilation from ES6 to ES5. They can be directly used in the browser, w/o babel.
// However, because we are using let in this file (and arrow functions), this file does need to be compiled.

// Find an element in an array with .find().
let array = [1, 2, 3, 8, 10, 11];
let match = array.find(item => item > 7);
console.log(match); //> 8

// Find an element in an array and get it's key using .findIndex().
match = array.findIndex(item => item === 3);
console.log(match); //> 2

// Fill values in an array with .fill()
let arr = [1, 2, 3];
arr.fill("a"); // This will change each element to "a"
console.log(arr); //> ['a', 'a', 'a']

arr = [1, 2, 3, 4];
arr.fill("a", 2); // This will change each element, starting at index 1.
console.log(arr); //> [1, 2, a, a]

arr = [1, 2, 3, 4, 5];
arr.fill("a", 2, 4); // Start an index 2, and end at index 4. Note that the end is NOT inclusive.
console.log(arr); //> [1, 2, a, a, 5]

// Array keys:
arr = [2, 5, 1, 9, 16, 7];
let keys = arr.keys();
for (let key of keys) {
    console.log(key); // 0, 1, 2, 3, 4, 5
}

// Array entries:
let entries = arr.entries();
for (let entry of entries) {
    console.log(entry); // [0, 2], [1, 5], [2, 1], [3, 9], [4, 16], [5, 7]
}
// Array values:
for (let [, value] of entries) {
    console.log(value); // 2, 5, 1, 9, 16, 7
}

// Array.from():
// This will convert array-like objects to an array. It is useful when you want to use an array method like map() on an
// object:
let $body = $("body");
$body.append('<div class="article"><p class="title">This is a title</p></div>');
$body.append('<div class="article"><p class="title">Another title</p></div>');
$body.append('<div class="article"><p class="title">The last title</p></div>');

let titleElements = document.querySelectorAll('.article .title');
let titles = Array.from(titleElements).map(t => t.textContent);
console.log(titles); // ["This is a title", "Another title", "The last title"]
