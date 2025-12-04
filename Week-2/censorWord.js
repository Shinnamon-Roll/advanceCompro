function sensorWord(sentence, word) {
    const regex = new RegExp(word, 'gi');
    const censoredText = sentence.replace(regex, '*'.repeat(word.length));
    return censoredText;
}

const originalPost = "JavaScript is a versatile language. I love JavaScript because it allows me to build amazing web applications.";
const censoredPost = sensorWord(originalPost, "JavaScript");
console.log(censoredPost);