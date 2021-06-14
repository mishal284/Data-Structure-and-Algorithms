// you need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’
 
    let animals = "leopard";
    if (animals == "lions" || animals ==  "leopard") {
      console.log("wild Animals");
    }
    else if (animals == "cats" || animals == "rabbits"){
      console.log("pet animals");
    }
    else{
      console.log("unknown");
    }