//Quick Question 1
// Answer: It returns a set containing 1,2,3,4

//Quick Question 2
//Answer: a set containing 'ref'

//Quick Question 3
//Answer: The map has two key value pairs. Both keys are an array [1,2,3] but the first vaue is true and the second is false

function hasDuplicate(arr) {
    if (arr.length === [...new Set(arr)].length) {
        return false;
    }
    return true;

}

function vowelCount(str) {
    const vowMap = new Map();
    const vowels = 'aeiou';
    const arrVowels = Array.from(str.toLowerCase()).filter((letter) => vowels.indexOf(letter) != -1);

    for (let char of arrVowels) {
        if (vowMap.has(char)) {
            vowMap.set(char, vowMap.get(char) + 1);
        }
        else {
            vowMap.set(char, 1);
        }
    }

    return vowMap;
}