# Summary of the application

### Testing 
- Add(key, value):
    <p><img src="../screenshots/add.png"></p>
- Get(key):
    <p><img src="../screenshots/get.png"></p>
- Remove(key):
    <p><img src="../screenshots/remove.png"></p>


### How to run the project
- clone the project
- run `npm install` in your terminal to install the "prompt" package
- run `node index.js` to start


### My idea
- Using a linkedList as the data structure to save "key" and "value": <br>
    1. Linked List is Dynamic data Structure.
    2. Linked List can grow and shrink during run time.
    3. Insertion and Deletion Operations are Easier.
    4. Efficient Memory Utilization, no need to pre-allocate memory.
    5. Faster Access time,can be expanded in constant time without memory overhead.

### Implement step by step
- create a "LinkedListNode" model with attribute key, value and next(as shown in linkedListNode.js file);
- create a "LinkedList" model with a constructor to initial a empty linkedList(as shown in linkedList.js file); 
- define three functions: add, get and remove to meet requirements (as shown in linkedList.js file); 
- create the start CLI interface (index.js file) with a menu that users can select to start and a loop to keep testing.

### Thanks for your time ~


