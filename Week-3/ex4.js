const message = "Hello, World!";
const vowels = "aeiouAEIOU";

for (char of message) {
    if (vowels.includes(char)) {
        console.log(char);
    }
}