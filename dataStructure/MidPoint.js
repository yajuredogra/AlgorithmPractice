// slow fast strategy

import { LinkedList } from "./LinkedList"

function midPoint(listHolder) {
    let slow = listHolder.getFirst()
    let fast = listHolder.getFirst()
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow.data
}
const list = new LinkedList()
list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
console.log(midPoint(list))