/* 
    
*/
export class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

export class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let count = 0
        let dataHolder = this.head
        while (dataHolder) {
            count++
            dataHolder = dataHolder.next
        }
        return count
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let dataHolder = this.head
        if (!dataHolder) {
            return null
        }
        while (dataHolder) {
            if (!dataHolder.next) {
                return dataHolder
            }
            dataHolder = dataHolder.next
        }
    }
    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }

        let previous = this.head
        let node = this.head.next
        while (node.next) {
            previous = node
            node = node.next
        }
        previous.next = null
    }

    insertLast(data) {
        let lastNode = this.getLast()
        if (!lastNode) {
            this.insertFirst(data)
            return
        }
        lastNode.next = new Node(data)
    }

    getAt(index) {
        let counter = 0
        let nodeHolder = this.head
        while (nodeHolder) {
            if (counter === index) {
                return nodeHolder
            }
            counter++
            nodeHolder = nodeHolder.next
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }

        const previous = this.getAt(index - 1)
        if (!previous || !previous.next) {
            return
        }
        previous.next = previous.next.next
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        const previois = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previois.next)
        previois.next = node

    }
}

// case 1
// const node = new Node('Hi')
// console.log(node.data)
// console.log(node.next)

//  case 2
const list = new LinkedList()
// list.head = new Node(5)
// console.log(list.head)

// case 3
// list.insertFirst(456)
// console.log(list.head) //{ data: 456, next: Node { data: 5, next: null } }

// case 4
// list.insertFirst('11')
// console.log(list.size())

// case 5
// console.log(list.getFirst())

// case 6
// console.log(list.getLast())

// case 7
// list.insertFirst('a')
// list.insertFirst('b')
// list.insertFirst('c')
// console.log(list.size())
// list.clear()
// console.log(list.size())

//case 8 
// console.log(list.head)
// list.removeFirst()
// console.log(list.head)

// case 9
// remove last when list is empty
// list.removeLast()

// remove last when list length is 1
// list.insertFirst('a')
// console.log(list.size())
// list.removeLast()
// console.log(list.size())

// remove last when list length is 2
// list.insertFirst('a')
// list.insertFirst('b')
// console.log(list.size())
// list.removeLast()
// console.log(list.size())

// remove last when list length is 3
// list.insertFirst('a')
// list.insertFirst('b')
// list.insertFirst('c')
// console.log(list)
// console.log(list.size())
// list.removeLast()
// console.log(list.size())
// console.log(list)

// case 10
// list.insertFirst('a')
// list.insertFirst('b')
// list.insertLast(4)
// console.log(list)


// case 11
// list.insertFirst('a')
// list.insertFirst('b')
// list.insertFirst('c')
// console.log(list)
// console.log(list.getAt(2))


// case 12
// remove when list is empty
// list.removeAt(2)

list.insertFirst('a')
list.insertFirst('b')
list.insertFirst('c')

// remove at first node
// list.removeAt(0)

// remove at last node
// list.removeAt(2)


// remove at index greater than size of list
// list.removeAt(6)
console.log(list)