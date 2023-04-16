abc === cba
function palindrome(str) {
    const reverse = str.split('').reverse().join('')
    return str === reverse
}


// With array Every function
function palindrome(str) {
    const reverse = str.split('')
    const check = reverse.every((char, index) => { // this function will go through all elements of array and check for given condition and return true or false
        return char === str[str.length - index - 1]
    })
    return check
}

console.log(palindrome('ababac'))

console.log(palindrome('abba'))