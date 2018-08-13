// ==========================================
// Property initializer shorthand:
// ==========================================
let whatever = "something";
let oldObj = {
    whatever: whatever // ES5
};
let newObj = {
    whatever // ES6
};
console.log(oldObj.whatever); //> "something"
console.log(newObj.whatever); //> "something"

// ==========================================
// Method initializer shorthand:
// ==========================================
// ES5:
let serverOld = {
    getPort: function() {
        console.log("this is get port");
    }
};
// ES6:
let serverNew = {
    getPort() {
        console.log("this is get port");
    }
};
serverOld.getPort();
serverNew.getPort();

// ==========================================
// Computed property names:
// ==========================================
function createSimpleObject(propName, propValue) {
    // ES5:
    // let obj = {};
    // obj[propName] = propValue;
    // return obj;
    // ES6:
    return {
        [propName]: propValue
    };
}

let ex1 = createSimpleObject("banana", "tasty");
console.log(ex1.banana); //> tasty

// Computed property names also support string concatenation:
function testStringConcat(person1, person2, person3) {
    return {
        ['member_' + person1.name]: person1,
        ['member_' + person2.name]: person2,
        ['member_' + person3.name]: person3
    };
}
let person1 = {name: "Brice", job: "Software Engineer"};
let person2 = {name: "Bill", job: "Janitor"};
let person3 = {name: "Alice", job: "Top Chief Awesomer"};
let ex2 = testStringConcat(person1, person2, person3);
console.log(ex2); //> {"member_Brice": {...}, "member_Bill": {...}, "member_Alice": {...}}
