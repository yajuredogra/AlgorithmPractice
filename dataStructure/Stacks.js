// FILO
class Stack {
    constructor() {
        this.dataHolder = []
    }

    push(data) {
        this.dataHolder.push(data)
    }

    pop() {
        return this.dataHolder.pop()
    }

    peek() {
        return this.dataHolder[this.dataHolder.length - 1]
    }
}

const s = new Stack()
s.push(1)
s.push(2)
console.log(s.peek())// 2
console.log(s.pop())// 2
console.log(s.pop())//1

