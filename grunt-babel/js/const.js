// Use const to initialize a read only variable with block scoping (like let).
const MAX_SIZE = 10;

console.log(MAX_SIZE); //> 10

// MAX_SIZE = 15; //> Grunt compile issue: "MAX_SIZE" is read-only

var doWork = function() {
    const x = 12;
    //var x = 10; //> Grunt compile issue: Duplicate declaration "x"

    return x;
};

console.log(doWork());
