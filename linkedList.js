const LinkedListNode = require('./linkedListNode');

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(key,value){
        if(this.head == null){
            this.head = new LinkedListNode(key,value,null);
        }else{
            var currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }
            currentNode.next = new LinkedListNode(key,value,null);
        }
    }
    
    get(key){
        var currentNode = this.head;
        while(currentNode != null){
            if(currentNode.key == key){
                return currentNode.value;
            }else{
                currentNode = currentNode.next;
            }
        }
        return "Not Existed";
    }

    remove(key){
        if(this.head.key==key){
            this.head = this.head.next;
            return "Removed";
        }else{
            var currentNode = this.head;
            while(currentNode.next != null){
                if(currentNode.next.key == key){
                    currentNode.next = currentNode.next.next;
                    return "Removed";
                    break;
                }else{
                    currentNode = currentNode.next;
                }
            }
            return "Not Existed"
        }
    }
    print(){
        var currentNode = this.head;
        while(currentNode != null){
            console.log( "Key: " + currentNode.key + " Value: " + currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
module.exports = LinkedList