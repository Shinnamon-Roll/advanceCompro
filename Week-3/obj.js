const book = {
    title: "The Great Gatsby",
    isAvailable: true,

    checkIN: function() {
        this.isAvailable = true;
        console.log(`You have checked in "${this.title}".`);
    },

    checkOUT: function() {
        this.isAvailable = false;
        console.log(`You have checked out "${this.title}".`);
    }
}

console.log(`Initial availability of "${book.title}": ${book.isAvailable}`);
book.checkOUT();
console.log(`Availability of "${book.title}" after check out: ${book.isAvailable}`);
book.checkIN();
console.log(`Availability of "${book.title}" after check in: ${book.isAvailable}`);