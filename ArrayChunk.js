function chunkArray(array, size) {
    let mainArray = []
    for (item of array) {
        let lastItem = mainArray[mainArray.length - 1]
        if (!lastItem || lastItem.length === size) {
            mainArray.push([item])
        } else {
            lastItem.push(item)
        }
    }
    return mainArray
}


function chunkArray(array, size) {
    let mainArray = []
    let index = 0
    while (index < array.length) {
        mainArray.push(array.slice(index, index + size))
        index = index + size
    }
    return mainArray
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))