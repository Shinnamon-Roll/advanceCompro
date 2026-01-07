const bookOBJ =  {
    title: "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    isAvailable: false
};

const bookJson = JSON.stringify(bookOBJ);

console.log("Book Object:", bookOBJ);
console.log("Book JSON String:", bookJson);

const recievedBookOBJ = JSON.parse(bookJson);

console.log("Recieved Book Object:", recievedBookOBJ);
