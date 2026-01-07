const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

console.log('--- Using for loop ---');

for (let i = 1; i < names.length; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}

console.log('--- Using forEach ---');

names.forEach((name, index) => {
    console.log(`Index ${index + 1}: ${name}`);
})

console.log('--- Using Function ---')

names.forEach(myFucn) ;

function myFucn(name) {
    console.log(name)
}

console.log('--- Using let ---')

for (let name of names) {
    console.log(name)
}
