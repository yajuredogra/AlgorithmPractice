function vowels(str) {
    let counter = 0

    for (let char of str) {
        if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
            counter++
        }


    }
    return counter
}


function vowels2(str) {
    let counter = 0
    const checker = 'aeiou'
    for (let char of str) {
        if (checker.includes(char.toLowerCase())) {
            counter++
        }
    }
    return counter
}

function vowels3(str) {
    let counter = 0
    const checker = ['a', 'e', 'i', 'o', 'u', 'abc'] // using array instead for keeping option open to add other keywords for check
    for (let char of str) {
        if (checker.includes(char.toLowerCase())) {
            counter++
        }
    }
    return counter
}


function vowelsWithRegex(str) {
    const matches = str.match(/[aeiou]/gi) //i for case sensitive g for so match dont stop after first finding
    return matches ? matches.length : 0
}
console.log(vowels('hello thErE'))

console.log(vowels('hello thErE'))