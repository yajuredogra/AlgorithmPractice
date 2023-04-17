function pyramid(number) {
    const midPoint = Math.floor((2 * number - 1) / 2)
    for (let i = 0; i < number; i++) {
        let level = ''
        for (let j = 0; j < (2 * number - 1); j++) {
            if (midPoint - i <= j && midPoint + i >= j) {
                level += '#'
            } else {
                level += '_'
            }
        }
        console.log(level)
    }
}

function pyramidWithRecursion(number, row = 0, level = '') {
    if (row === number) {
        return
    }

    if (level.length === 2 * number - 1) {
        console.log(level)
        return pyramid(number, row + 1)
    }

    const midPoint = Math.floor((2 * number - 1) / 2)
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        level += "#"
    } else {
        level += "_"
    }

    pyramid(number, row, level)
}

pyramid(5)
pyramidWithRecursion(5)