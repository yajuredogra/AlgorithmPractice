function countLevelWidthOfTree(root) {
    const counter = [0]
    const stopper = '####'
    const arr = [root, stopper] // create an array and push the given node to the array and one stopper for count validation
    while (arr.length > 1) { // till array have an element iterate the array
        const node = arr.shift() // pick the first element of array and remove from array
        if (node === stopper) {
            arr.push(stopper)
            counter.push(0)
            return
        }

        arr.push(...node.children) // add all child items of selected node at last of selected array
        counter[counter.length - 1] = counter[counter.length - 1] + 1
        // or 
        counter[counter.length - 1]++
    }
    return counter
}