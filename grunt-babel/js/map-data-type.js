// Maps have unique keys and non-unique values.
let map = new Map();

// Set a value (.set() is chainable)
map.set('foo', 123);

// Get a value
map.get('foo'); //> 123

// Check for a key
map.has('foo'); //> true

// Remove a key
map.delete('foo'); //> true
map.delete('bar'); //> false

map.has('foo'); //> false

map.set('foo', 123);
map.set('bar', 456);

// Get the size of a map
map.size; //> 2

// Clear a map
map.clear(); // Note: This method does not actually return anything
map.size; //> 0

// Setting up a map using the constructor
let map2 = new Map([
    ['name', 'Brice'],
    ['age', 36],
    ['position', 'Software Engineer']
]);

// Keys can be any value, even an object.
let obj1 = {'a': 5, 'b': 6};
map2.set(obj1, "value");
console.log(map2.get(obj1)); //> value

// Get all keys (returns a MapIterator object):
console.log(map2.keys());

// Get all values (returns a MapIterator object):
console.log(map2.values());

// As both .keys() and .values() return MapIterator objects, you can iterate over the results:
for (let value of map2.values()) {
    console.log(value); // Brice, 36, Software Engineer, value
}

// Getting the entries:
console.log(map2.entries()); //> MapIterator {["name", "Brice"], ["age", 36], ...}
// Using destructuring, we can iterate over these results, and access both the key and value directly:
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}
// Remember, [key, value] is not an array. It is the syntax for destructuring. Think list() in PHP.
