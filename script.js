let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

library.push(new Book('title', 'author', 123, false))

const cardContainer = document.getElementById('cardContainer');
const addButton = document.getElementById('addButton');
const addBookPopup = document.getElementById('addBookPopup');
const closePopupButton = document.getElementById('popupCrossButton');
// const totalBooks = document.getElementById('totalBooks');
// const readBooks = document.getElementById('readBooks');
// const notReadBooks = document.getElementById('notReadBooks');

const addBookButton = document.getElementById('addBookButton');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');

addButton.addEventListener('click', () => addBookPopup.classList.remove('hidden'));
closePopupButton.addEventListener('click', () => addBookPopup.classList.add('hidden'));
addBookButton.addEventListener('click', () => addBookToLibrary());

function addBookToLibrary() {
  library.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, false));
  displayBooks();
  addBookPopup.classList.add('hidden');
}

// function displayCounts() {
//   let counter = 0;
//   library.forEach(book => {
//     if(book.isRead) counter++;
//   })

//   const totalCount = library.length;
//   const readCount = counter;
//   const notReadCount = totalCount - readCount;

//   readBooks.textContent = `Read: ${readCount}`;
//   notReadBooks.textContent = `Not Read: ${notReadCount}`;
//   totalBooks.textContent = `Total: ${totalCount}`;
// }



function displayBooks() {
  const cards = library.map(book => {
    return (
      `
      <div class="app__content-card">
          <button class="delete-card"><img src="./assets/cross.svg" alt="cross"></button>
          <h2>${book.title}</h2>
          <h4>By: ${book.author}</h4>
          <h4>Pages: ${book.pages}</h4>
          <label class="app__card-switch">
            <input type="checkbox" ${book.isRead ? 'checked' : ''} class="read-checkbox" value="${book.title}"/>
            <span class="slider round" ></span>
          </label>
        </div>
      `
    );
  }).join('');

  cardContainer.innerHTML = cards;
}

displayBooks(library);

const deleteCardButtons = document.querySelectorAll('.delete-card');
const readCheckboxes = document.querySelectorAll('.read-checkbox');

readCheckboxes.forEach(box => {
  box.addEventListener('click', (e) => {
    const bookId = e.target.value; 
    
    library = library.map(book => {
      
      if(book.title === bookId){
        book.isRead = !book.isRead;
      }
      console.log(library);
    })
  
  })
})



deleteCardButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();
  });
})

