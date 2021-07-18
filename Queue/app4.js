//Implement following methods:
//clear: a method that clears queue
//toString: a method that converts all members of queue into string
class Queue{
  constructor(){
      this.items = [];
      this.size =5;

  }
  // enqueue function
  enqueue(item)
  {    
  // adding element to the queue
      if(this.items.length+1 > this.size){
          console.log('Queue overflow');
          }
      else{
          this.items.push(item);
          }
  }

  dequeue()
  {
  // removing element from the start of queue
      if(this.items.length==0){
          console.log("Queue is underflow");
      }
      else{
          this.items.shift();
      }   
  }
 
  clear()
  {
      this.items= [];
      this.size = 0;
  }
  toString()
  {
      let str = this.items.toString();
      console.log(str);
  }
  printQueue()
  {
      for(let i=0; i< this.items.length; i++){
          console.log(this.items[i]);
      }
  }
}
let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue('f');
myQueue.toString();
myQueue.clear();
console.log(myQueue);