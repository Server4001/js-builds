let arr = [1, 2, 3, 4];

for (let i of arr) {
    console.log(i); //> 1, 2, 3, 4
}

// Also works w/ maps and sets
let map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);
for (let [key, value] of map) {
    console.log(key); //> key1, key2, key3
    console.log(value); //> value1, value2, value3
}
let set = new Set(["Red", "Blue", "Green"]);
for (let i of set) {
    console.log(i); //> Red, Blue, Green
}
