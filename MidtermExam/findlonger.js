function findLongestRepeatedSubstring(inputStr) {
    if (inputStr.length < 2) return "";
    
    let map = new Map();
    
    // Build frequency map for all substrings
    for (let i = 0; i < inputStr.length; i++) {
        for (let j = i + 1; j <= inputStr.length; j++) {
            let sub = inputStr.substring(i, j);
            map.set(sub, (map.get(sub) || 0) + 1);
        }
    }
    
    // Find the maximum length of repeated substrings
    let maxLen = 0;
    for (let [key, count] of map) {
        if (count >= 2) {
            maxLen = Math.max(maxLen, key.length);
        }
    }
    
    if (maxLen === 0) return "";
    
    // Find candidates of maxLen that repeat
    let candidates = [];
    for (let i = 0; i <= inputStr.length - maxLen; i++) {
        let sub = inputStr.substring(i, i + maxLen);
        if (map.get(sub) >= 2) {
            candidates.push({ sub, index: i });
        }
    }
    
    // Sort by index to get the earliest occurrence
    candidates.sort((a, b) => a.index - b.index);
    
    return candidates[0].sub;
}

// Test cases
console.log(findLongestRepeatedSubstring("banana")); // "ana"
console.log(findLongestRepeatedSubstring("abcd"));   // ""
console.log(findLongestRepeatedSubstring("ababa"));  // "aba"