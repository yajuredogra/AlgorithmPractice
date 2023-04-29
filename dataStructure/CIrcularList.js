import { LinkedList, Node } from "./LinkedList"

function circular(list) {
    let slow = list.getFirst()
    let fast = list.getFirst()
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }

    }
    return false
}

const list = new LinkedList()
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
list.head = a
a.next = b
b.next = c
c.next = d// false
d.next = b// true
console.log(circular(list))