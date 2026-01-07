let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true, "Apple"];
let values3 = ['Mars', 9, 'Apple']

let result = []

for (let object1 of values1) {
    for (let object2 of values2) {
        for (let object3 of values3) {
            if (object3 === object1 && object1 === object2)
                result.push(object1)
        }
    }
}

console.log(result)

// Expected output: ["Apple"]