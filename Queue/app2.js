// Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the queue.
//enqueue: a method through that you can add a value to the queue
//peek: a method through which you can get the value on the top of queue
//dequeue: a method through which you can remove the first element of the queue
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
  enqueueMethod(item){
      this.items.length= this.items.length+1;
      this.items[this.items.length-1]=item;
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
  dequeueMethod()
  {
       for(let i=0; i<this.items.length; i++){
           this.items[i]= this.items[i+1];
      }
      this.items.length=this.items.length-1;
      // let i= 0;
      // while(i<this.items.length){
      //     this.items[i]= this.items[i+1];
  //     i++;
  //   }
  //     this.items.length=this.items.length-1;
  }

  peek()
  {
      console.log(this.items[0]);
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
myQueue.printQueue();
myQueue.enqueueMethod('e');
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.dequeueMethod();
myQueue.printQueue();
myQueue.peek();