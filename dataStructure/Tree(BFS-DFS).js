export class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data)
    }
}

export class Tree {
    constructor() {
        this.root = null // head of tree
    }

    traverseBF(fn) {
        const arr = [this.root] // create an array and push the root to the array
        while (arr.length) { // till array have an element iterate the array
            const node = arr.shift() // pick the first element of array and remove from array
            arr.push(...node.children) // add all child items of selected node at last of selected array
            fn(node) // perform the action passed to the node
        }
    }

    traverseDF(fn) {
        const arr = [this.root] // create an array and push the root to the array
        while (arr.length) { // till array have an element iterate the array
            const node = arr.shift() // pick the first element of array and remove from array
            arr.unshift(...node.children) // add all child items of selected node at start of selected array
            fn(node) // perform the action passed to the node
        }
    }

}
