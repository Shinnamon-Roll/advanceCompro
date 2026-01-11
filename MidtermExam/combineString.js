function processAndCombineStrings(strings, lengthThreshold) {
    let words = []
    let result = []

    strings.forEach(word => {
        const upWord = word.toUpperCase()

        if (upWord.length >= lengthThreshold) {
            words.push(upWord)
        }
    });

    words.sort((a, b) => {
        const diff = countVowels(b) - countVowels(a)
        if (diff !== 0) return diff
        const lenDiff = b.length - a.length
        if (lenDiff !== 0) return lenDiff
        return a.localeCompare(b)
    })

    return words.join(' ')
    
}

function countVowels(words) { 
    // return words.match(/[AEIOU]/gi).length;

    const vowels = 'AEIOU'
    let count = 0

    for (char of words) {
        if (vowels.includes(char)) {
            count ++
        }
    }

    return count
}

const strings = ["apple", "banana", "cherry", "date",
"fig", "grape"];
console.log (processAndCombineStrings (strings,5));

console.log (processAndCombineStrings (strings, 6)) ;

console.log (processAndCombineStrings (["hi", "hello", "world"], 2));