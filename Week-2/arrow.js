const a = 10
const b = 5

const add = function(x, y) {
    return x + y;
}

const addArrow = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    const result = x - y;
    return result;
}

console.log("Addition: " + add(a, b));
console.log("Addition (Arrow): " + addArrow(a, b));
console.log("Subtraction (Arrow): " + subtract(a, b));