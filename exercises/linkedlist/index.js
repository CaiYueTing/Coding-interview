// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data){
        // this.head = new Node(data, this.head)
        this.insertAt(data, 0)
    }
    
    size(){
        let count = 0
        let node = this.head

        while(node) {
            count ++
            node = node.next
        }
        return count
    }

    getFirst() {
        return this.getAt(0)
        // return this.head
    }

    getLast() {
        // if (!this.head) {
        //     return null
        // }
        // let node = this.head
        // while (node.next) {
        //     node = node.next
        // }
        // return node
        return this.getAt(this.size()-1)
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if(!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if(!this.head){
            return 
        }
        if (!this.head.next){
            this.head =null
            return
        }
        let previous = this.head
        let node = this.head.next
        while(node.next){
            previous = node
            node = node.next
        }
        previous.next = null
    }
    
    insertLast(data) {
        
        // if (!this.head){
        //     this.head = new Node(data)    
        //     return
        // }
        
        // let node = this.head
        // while (node.next) {
        //     node = node.next
        // }
        // node.next = new Node(data)

        let last = this.getLast()
        if (last) {
            last.next = new Node(data)
        }else {
            this.head = new Node(data)
        }

    }

    getAt(index) {
        if (index > this.size()-1){
            return null
        }
        let count = 0
        let node = this.head
        while (node) {
            if (count == index){
                return node
            }
            count ++
            node = node.next
        }

    }
    removeAt(index){      
        if (!this.head){
            return null
        }  
        if (index >this.size()-1) {
            return null
        }
        if (index == 0 ){
            this.head = this.head.next
            return
        }

        // if (this.getAt(index).next){
        //     this.getAt(index-1).next = this.getAt(index).next
        //     return
        // }else {
        //     this.getAt(index-1).next = null
        // }
        // same code above
        const previous =  this.getAt(index-1)
        if (previous.next.next){
            previous.next = previous.next.next
        }else{
            previous.next = null    
        }
    }

    insertAt(data, index){

        if (index == 0 || !this.head){
            this.head = new Node(data, this.head)
            return
        }
        // if (index > this.size()-1){
        //     this.insertLast(data)
        //     return
        // }
        const previous = this.getAt(index-1)  || this.getLast()
        // const previous =  this.getAt(index-1)
        previous.next = new Node(data, previous.next)
        
    }

    forEach(fn){
        if (!this.head){
            return null
        }
        let node = this.head
        while(node){
            fn(node)
            node = node.next
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while(node){
            yield node
            node = node.next
        }
    }

} 

module.exports = { Node, LinkedList };
