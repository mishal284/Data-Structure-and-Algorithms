class Stack{
  constructor(){
    this.items =[];
    this.size = 10;
  }
  push(item){
    this.items.push(item)

  }
  pop(item){
    this.items.pop();

  }
  peek(){
    console.log(this.items[this.items.length-1]);

  }
  isEmpty(){
    if (this.items.length == 0) {
      console.log(true);
    }else{
      console.log(false);
    }
      
    

  }
  printStack(){
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
      
    }
  }
}
  

myStack = new Stack;
myStack.push('karachi');
myStack.push('lahore');
myStack.push('islamabad');
myStack.isEmpty();
Stack.pop();
myStack.printStack();
