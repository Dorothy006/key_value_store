const LinkedList = require('./linkedList');
const prompt =require('prompt-sync')();

var list = new LinkedList();
var con = true;
while(con){
    const options = prompt("*******Please select a number to start******* " + '\n'  
                    + "1.Add   2.Get   3.Remove  4.Exit" + '\n' );
    
    switch(options){
     case "1" :
        const key1 = prompt("Please enter key: ");
        const value = prompt("please enter value: ");
        list.add(key1,value);
        console.log("Your updated list is: ");
        list.print();
        break;
     case "2" :
        const key2 = prompt("Please enter key: ");
        console.log("The value with this key is: ");
        console.log(list.get(key2));
        break;
     case "3" :
        const key3 = prompt("Please enter key: ");
        console.log(list.remove(key3));
        console.log("Your updated list is: ");
        list.print();
        break;
    case "4" :
        con = false;
    }
    
}


