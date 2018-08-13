// One issue with maps and sets is that they use pointers to other objects. If the object that a set/map is pointing
// to gets deleted, that object cannot be garbage collected, and will still exist in memory. Even if we do not
// intend to use that pointer. Only after the pointer is also deleted, can the original object be garbage collected,
// and get released from memory.
// WeakMaps and WeakSets were created to solve this problem. An object can be garbage collected and released from
// memory, event if a WeakMap/WeakSet is still pointing to it.

// WeakSets do NOT have any methods dealing with collections, including:
let set = new WeakSet();
set.size; //> undefined
set.entries; //> undefined
set.values; //> undefined
set.forEach; //> undefined
set.clear; //> undefined
// You cannot iterate over WeakSets using for..of

set = new WeakSet();

// WeakSets can only hold objects.
let obj = {name: "Brice"};

// You can add, and check if a value exists
set.add(obj);
console.log(set.has(obj)); //> true

// You can also delete
set.delete(obj);
console.log(set.has(obj)); //> false

// WeakMaps are the same as WeakSets. They do not have: .size, .entries, .values, .keys, .clear, or .forEach
let map = new WeakMap();

// You can add, and check if a value exists
map.set(obj, "my value"); // Only objects can be keys in WeakMaps
console.log(map.has(obj)); //> true

// You can get
console.log(map.get(obj)); //> "my value"

// You can remove
map.delete(obj);
console.log(map.has(obj)); //> false
