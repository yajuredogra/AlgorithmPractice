// [ [ 1, 2, 3 ],
// [ 8, 9, 4 ],
// [ 7, 6, 5 ] ]


function matrix(n) {
    const results = []
    //create an empty space of matrix
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        // top row to fill [1, 2, 3 ] & to fill 9 when while was called again
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter
            counter++;
        }
        startRow++;

        //Right column to fill 4,5
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++;
        }
        endColumn--;

        //Bottom row to fill 6,7
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++;
        }
        endRow--;

        // // start column // to fill 8
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++;
        }
        startColumn++;


    }
    return results;
}

console.log(matrix(4))