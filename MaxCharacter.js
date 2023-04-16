function mostCharacter(string) {
    let dataHolder = {}
    let mostNumber = 0
    let mostChar = ''
    for (char of string) {
        if (dataHolder[char]) {
            dataHolder[char]++
        } else {
            dataHolder[char] = 1
        }
        // above if else can be achieved with following
        //dataHolder[char] = dataHolder[char] + 1 || 1

        if (mostNumber < dataHolder[char]) {
            mostChar = char
            mostNumber = dataHolder[char]
        }
    }
    return mostChar
}

function mostCharacterWith2Loops(string) {
    let dataHolder = {}
    let mostNumber = 0
    let mostChar = ''
    for (char of string) {
        if (dataHolder[char]) {
            dataHolder[char]++
        } else {
            dataHolder[char] = 1
        }
        // above if else can be achieved with following
        //dataHolder[char] = dataHolder[char] + 1 || 1
    }

    for (let char in dataHolder) {
        if (dataHolder[char] > mostNumber) {
            mostNumber = dataHolder[char]
            mostChar = char
        }
    }

    return mostChar
}


console.log(mostCharacter('avneiouhweuvauiuaapaaabviaubaubaou'))