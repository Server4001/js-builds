// ============================== .is() ==============================
// .is is just like ===, except that it is a function. It compares 2 parameters, and returns true if they are the
// same, or false if they are not. In ALMOST every case it works identical to ===.
// This does NOT need browser-polyfill.js
console.log(Object.is(1, 2)); //> false
console.log(Object.is(2, 2)); //> true
console.log(Object.is(3, 2)); //> false
console.log(Object.is("2", 2)); //> false
console.log(Object.is([2], [2])); //> false
console.log(Object.is({"a": "b"}, {"a": "b"})); //> false

// There are 2 cases where .is() differs from ===.
// The first is neg and pos 0:
console.log(Object.is(-0, 0)); //> false
console.log(-0 === 0); //> true

// The second case is NaN:
console.log(Object.is(NaN, NaN)); //> true
console.log(NaN === NaN); //> false

// ============================== .assign() ==============================
// .assign allows you to copy the properties from one object to another object. In jQuery this is .extend(). It
// copies all the properties and methods from a target object to a source object. This is commonly referred to as
// "mix-ins".
let shark = {
    bite: function(target) {
        target.hurt = true;
    }
};

let person = {};

let laser = {
    pewpew: function(target) {
        target.exploded = true;
    }
};

// shark is the target, laser is the source.
Object.assign(shark, laser);

shark.bite(person);
console.log(person); //> {hurt: true}

// There is no forwarding going on here. The shark object now has it's own pewpew function.
shark.pewpew(person);
console.log(person); //> {hurt: true, exploded: true}

// You are not limited to 1 mixin. You could copy laser, tree, and banana ALL to shark:
let tree = {grow: function(target) {target.tall = true;}};
let banana = {nutritious: function(target) {target.healthy = true;}};

// shark.grow(person); // Uncaught TypeError: shark.grow is not a function

Object.assign(shark, laser, tree, banana);

shark.grow(person);
console.log(person); //> {hurt: true, exploded: true, tall: true}

shark.nutritious(person);
console.log(person); //> {hurt: true, exploded: true, tall: true, healthy: true}
