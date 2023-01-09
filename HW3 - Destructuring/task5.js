const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

// const push = (bookList, toAddList) => {
//   let [...finaliList] = bookList;
//   finaliList.push(toAddList);
//   return finaliList;
// };
// console.log(push(books, bookToAdd));

const push = [...books, bookToAdd];
console.log(push);
