// The rest parameter must always be the last in a function. Note that in doing this, numbers will be a true array
// object. Not like the "arguments" object.
let sum = function(name, ...numbers) {
    console.log(name);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
};

console.log(sum("Bill", 1, 2, 3)); //> 6
console.log(sum("Ted", 4, 12, 20, 100, 1)); //> 137
console.log(sum("Brice")); //> 0
