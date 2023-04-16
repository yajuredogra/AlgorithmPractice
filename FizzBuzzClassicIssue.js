function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizz buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 3 === 5) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}


function fizzBuzz2(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log('fizz buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 3 === 5) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(20)
