const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your weight (in kg): ', (weight) => {
        rl.question('Enter your height (in meters): ', (height) => {
            
            let bmi = weight / (height * height);
            
            console.log(`Hello, ${name}! Your BMI is ${bmi.toFixed(2)}.`);
            
            rl.close();
        });
    });
}); 