function reverseString(str) {
    const arr = str.split('')
    arr.reverse()
    return arr.join('')
}

function reverseString2(str) {
    const arr = str.split('').reverse().join('')
    return arr
}

function reverseString3(str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}


function reverseString4(str) {
    let arr = str.split('')
        .reduce((reversed, character) => { // it will condense all array value into one single value
            return character + reversed;
        }, '') // starting intial value for function.
    // This argument will be passed and used into first argument function with each successive run. This fuction runs one time for every elemnt of array.
    //character argument we are operating on right now.
    return arr
}

console.log(reverseString("Hello"))

console.log(reverseString("Hello"))