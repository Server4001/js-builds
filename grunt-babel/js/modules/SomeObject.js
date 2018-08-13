export let SomeObject = (function() {
    return {
        someMethod() {
            return 12;
        }
    };
})();

const sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
