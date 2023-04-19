
class Queue {
    constructor() {
        this.dataHolder = []
    }

    peek() { // add this new method. Will check last item to be removed next but will not remove it from queue like remove method
        return this.dataHolder[this.dataHolder.length - 1]
    }

    add(item) {
        this.dataHolder.unshift(item) // to add item at first index
        return this.dataHolder
    }

    remove() {
        return this.dataHolder.pop() // to remove or pop item from array last item

    }
}


function weave(sourceOne, sourceTwo) { // merge 2 queues into one with items taken from 2 queues. items should be taken alternatively from queues
    const queue = new Queue()
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            queue.add(sourceOne.remove())
        }

        if (sourceTwo.peek()) {
            queue.add(sourceTwo.remove())
        }
    }

    return queue
}

const queue1 = new Queue()
queue1.add(5)
queue1.add(2)


const queue2 = new Queue()
queue2.add('Hi')
queue2.add('there')


const wave = weave(queue1, queue2)
console.log(wave.remove())// 5
console.log(wave.remove())// Hi
console.log(wave.remove())// 2
console.log(wave.remove())// there

