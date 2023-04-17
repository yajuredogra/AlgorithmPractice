function anagram(stringA, stringB) {
    let simpleA = buildCharacterMap(stringA)
    let simpleB = buildCharacterMap(stringB)
    if (Object.keys(simpleA).length !== Object.keys(simpleB).length) {
        return false
    }

    for (let char in simpleA) { // parse the object
        if (simpleA[char] !== simpleB[char]) {
            return false
        }
    }
    return true
}

function buildCharacterMap(string) {
    const charMap = {}
    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}




function anagramSolution2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
    return string
        .replace(/[^\w]/g, '') // replace all the non A-Z a-z 0-9
        .toLowerCase() // convert all to lowercase
        .split('') // make the string to array
        .sort()// sort the array
        .join('')// convert sorted array to string
}



console.log(anagram('rail safety', 'fairy tales'))
console.log(anagram('RAIL! SAFETY!', 'fairy tales'))
console.log(anagram('Hi there', 'Bye there'))