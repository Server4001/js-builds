let category = "music";
let id = 1145;
let url = `http://www.api.com/${category}/${id}`;
console.log(url); //> "http://www.api.com/music/1145"

// You can also use expressions:
let x = 5;
let y = 6;
console.log(`${x} + ${y} = ${x + y}`); //> "5 + 6 = 11"

// You can even use functions in a template literal. This is known as "tagging":
let upper = function(strings, ...values) {
    console.log(strings); //> ["", " + ", " is equal to ", ""]
    console.log(values); //> [5, 6, 11]

    let result = "";
    for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result.toUpperCase();
};

var result = upper `${x} + ${y} is equal to ${x + y}`;
console.log(result); //> "5 + 6 IS EQUAL TO 11"
