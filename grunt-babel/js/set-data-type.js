// Sets only have values.
let set = new Set();

// Adding a value
set.add("Red");

// Checking if a value exists
set.has("Red"); //> true

// Removing a value
set.delete("Red"); //> true
set.delete("Reds"); //> false

set.add("Green").add("Blue");

// Getting the size
console.log(set.size); //> 2

// Clearing
set.clear();

console.log(set.size); //> 0

// Using the constructor to set up a set.
let set2 = new Set([
    'orange',
    'purple',
    'pink'
]);
console.log(set2);

// Iterating over values (sets follow FIFO):
for (let x of set2) {
    console.log(x); //> orange, purple, pink
}
