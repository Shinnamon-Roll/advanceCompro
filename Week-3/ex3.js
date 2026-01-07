const guests = ['Alice', 'Bob', 'Charlie', 'David'];

let stop = false

while (!stop) {
    guests.forEach(element => {
        if (element === "Charlie") {
            console.log("Found Charlie!")
            stop = true;
        }
    });
}