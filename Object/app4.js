let book = [
  {
    name: "The Lean Startup",
    topics: ["entrepreneurship", "startups"],
  },
  {
    name: "War and Peace",
    topics: ["peace", "politics"],
  },
];
  book.length = book.length+1;
  book[book.length-1] = {name: 'My book',
  topics :['practice']
}
book.name= 'My book'
book.topics = 'practice'
console.log(book);
