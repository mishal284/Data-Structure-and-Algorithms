let books = [
  {
    name: "The Lean Startup",
    topics: ["entrepreneurship", "startups"],
  },
  {
    name: "War and Peace",
    topics: ["peace", "politics"],
  },
]
function letUnshift() {
  for (i = book.length-1; i >=0; i--) {
    book[i] = book[i-1];  
  }
  book[book.length-book.length] = {
    name :'chemistry', topics:['training']
  }
}
letrUnshift();
console.log(book)