/* 
    
*/ 
class Node{
    constructor(data,next =null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    
    insertFirst(data){
            this.head = new Node(data, this.head) 
    }
    
    size(){
        let count = 0
        let dataHolder = this.head
        while(dataHolder){
            dataHolder =  dataHolder.next
            count++
        }
        return count
    }
    
    getFirst(){
            return this.head.data
    }
    
    getLast(){
        let dataHolder = this.head
        if(!dataHolder){
            return null
        }
        while(dataHolder){
            if(!dataHolder.next){
                return dataHolder
            }
            dataHolder =  dataHolder.next
        }
    }
    clear(){
        this.head = null
    }
    
    removeFirst(){
        if(!this.head){
            return 
        }
        this.head = this.head.next
    }
}

// case 1
const node = new Node('Hi')
// console.log(node.data)
// console.log(node.next)

//  case 2
const list = new LinkedList()
list.head = new Node(5)
// console.log(list.head)

// case 3
list.insertFirst(456)
// console.log(list.head) //{ data: 456, next: Node { data: 5, next: null } }

// case 4
list.insertFirst('11')
// console.log(list.size())

// case 5
// console.log(list.getFirst())

// case 6
// console.log(list.getLast())

// case 7
list.insertFirst('a')
list.insertFirst('b')
list.insertFirst('c')
// console.log(list.size())
// list.clear()
console.log(list.size())

//case 8 
console.log(list.head)
list.removeFirst()
console.log(list.head)