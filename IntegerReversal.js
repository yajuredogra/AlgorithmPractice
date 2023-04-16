function reverseInt(numbers) {
    let sign = Math.sign(numbers) // will return 1 if number is positive else -1 if number is negative

    let reversed = numbers.toString().split('').reverse().join('')

    return parseInt(reversed) * sign
}

console.log(reverseInt(51))
console.log(reverseInt(189))
console.log(reverseInt(500))
console.log(reverseInt(-51))
console.log(reverseInt(-90))