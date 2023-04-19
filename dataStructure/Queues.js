// FIFO
class Queue {
    constructor() {
        this.dataHolder = []
    }

    add(item) {
        this.dataHolder.unshift(item) // to add item at first index
        return this.dataHolder
    }

    remove() {
        return this.dataHolder.pop()

    }
}

const queue = new Queue()
console.log(queue.add(5))
console.log(queue.remove())
