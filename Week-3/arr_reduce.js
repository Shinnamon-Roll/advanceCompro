const number = [15, 25, 35, 45, 55];

const sum =
    number.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    
console.log("The sum of the array elements is:", sum);