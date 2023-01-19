let library = [
  {
    title: "Ellam",
    author: "Gundi", 
    pages: 34,
    isRead: true
  },
  {
    title: "Hola",
    author: "Gorbac",
    pages: 56,
    isRead: false
  }
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks(library) {
  library.forEach(book => console.table(book));
}

displayBooks(library);