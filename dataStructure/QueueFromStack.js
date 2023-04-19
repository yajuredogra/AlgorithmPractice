/*
    To create a queue using 2 stacks
*/

import { Stack } from "./Stacks";

class Queue {
    // creating a queue(FIFO) functionality with stack(FILO)
    constructor() {
        // have 2 stacks to work with
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }

    add(data) {
        // add new item into stack 1 [A,B,C]
        this.stackOne.push(data)
    }

    remove() {
        // move all item to stack 2 [C,B,A]
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }

        const record = this.stackTwo.pop() // get hold of last item Z

        // return back all items from stack 2 to stack 1 [B,C]
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop())
        }

        return record //return A
    }

    peek() {
        // move all item to stack 2 [C,B,A]
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }

        const record = this.stackTwo.peek() // get hold of last item A

        // return back all items from stack 2 to stack 1 [A,B,C]
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop())
        }

        return record // return A
    }
}

const q = new Queue()
q.add('A')
q.add('B')
q.add('C')
console.log(q.peek())// 1
console.log(q.remove())// 1
console.log(q.remove())// 2

