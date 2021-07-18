//Implement following methods:
//isEmpty: a method that checks whether the given queue is empty or not. It will return a boolean
//isFull: a method that checks whether the given queue is full or not. Hint: Compare the length of array with size
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

  isEmpty()
  {
      if(this.items.length == 0){
          console.log("true");
      }
      else{
          console.log("false");
      }
  }
  isFull()
  {
      if(this.items.length == this.size){
          console.log("true");
      }
      else{
          console.log("false");
      }

  }
  
  printQueue()
  {
      for(let i=0; i< this.items.length; i++){
          console.log(this.items[i]);
      }
  }
}
let myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue('d');
myQueue.isFull();