var doWork = function(flag) {
    if (flag) {
        var x = 3;
    }
    return x;
};
// Although x is defined in the if, this still works (x is undefined if flag is falsy), because in JavaScript,
// variables are hoisted to the top of functions.
console.log(doWork(false));

doWork = function(flag) {
    if (flag) {
        let x = 3;
    }

    return x;
};
// This does not work. Because we are using let, the variable x is only available inside the if block (block scope).
console.log(doWork(true)); //> Uncaught reference error: x is not defined

// This behavior is the same in a for loop:
doWork = function() {
    for (let i = 0; i < 10; i++) {
        console.log(i); // Here, we have access to i.
    }

    return i; // Here, we do NOT have access to i.
};
console.log(doWork()); //> Uncaught reference error: i is not defined
