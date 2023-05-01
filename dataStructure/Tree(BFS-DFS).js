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
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift()
            arr.push(...node.children) // to add items at last of array
            fn(node)
        }
    }

    traverseDF(fn) {
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift()
            arr.unshift(...node.children) // to add items at front of array
            fn(node)
        }
    }

}
