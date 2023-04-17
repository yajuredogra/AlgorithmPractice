function steps(number) {
    for (let i = 0; i < number; i++) {
        let holder = ''
        for (let j = 0; j < number; j++) {
            if (j <= i) {
                holder += '#'
            } else {
                holder += ' '
            }
        }
        console.log(`'` + holder + `'`)
    }
}

function stepsWithRecursion(number, row = 0, stair = '') {
    if (number === row) {
        return
    }

    if (number === stair.length) {
        console.log(stair)
        return stepsWithRecursion(number, row + 1)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    return stepsWithRecursion(number, row, stair)

}

stepsWithRecursion(5)

steps(5)