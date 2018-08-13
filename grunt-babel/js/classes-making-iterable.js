class Company
{
    constructor()
    {
        this.employees = [];
    }

    addEmployees(...names)
    {
        this.employees = this.employees.concat(names);
    }

    //[Symbol.iterator]()
    //{
    //    return new ArrayIterator(this.employees);
    //}
    // Instead of using the ArrayIterator class we built, we can just use a generator. Note: Generators require
    // Babel's browser-polyfill.js.
    // Inside the class body, we use an asterisk to denote that a function is a generator.
    *[Symbol.iterator]()
    {
        for (let employee of this.employees) {
            yield employee;
        }
    }
}

class ArrayIterator
{
    constructor(array)
    {
        this.array = array;
        this.index = 0;
    }

    next()
    {
        let result = {
            value: undefined,
            done: true
        };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;

            this.index++;
        }

        return result;
    }
}

let count = 0;
let company = new Company();
company.addEmployees("Alex", "Bill", "Ted", "Alice", "Susie", "Mary");

for (let employee of company) {
    console.log(employee);
}
console.log("==================================================");

// Example of filtering for names that start with "A".
let filter = function*(items, predicate) {
    for (let item of items) {
        if (predicate(item)) {
            yield item;
        }
    }
};
for (let employee of filter(company, name => name[0] === "A")) {
    console.log(employee); //> Alex, Alice
}
console.log("==================================================");

// Example of "taking" the first N names.
let take = function*(items, number) {
    let count = 0;
    if (number < 1) {
        return;
    }

    for (let item of items) {
        yield item;
        count++;

        if (count >= number) {
            // Because we return here, we will stop iterating after the number is reached. If the are 100,000 records,
            // and number is 50, we will only iterate over 50 records.
            return;
        }
    }
};
for (let employee of take(company, 3)) {
    console.log(employee); //> Alex, Bill, Ted
}
console.log("==================================================");

// Example of using the above 2 generators to only take the first 2 names starting with "T".
company.addEmployees("Tina", "Brice", "David");
for (let employee of take(filter(company, name => name[0] === "T"), 2)) {
    console.log(employee); //> Ted, Tina
}
