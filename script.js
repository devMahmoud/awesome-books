const bookContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBookBtn = document.querySelector('.add-book-btn');

let booksArr = [];

if (localStorage.getItem('books')) {
  booksArr = JSON.parse(localStorage.getItem('books'));
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  removeBook(index) {
    booksArr.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArr));
  }

  add(book) {
    
    booksArr.push(book);
    localStorage.setItem('books', JSON.stringify(booksArr));
    render();
  }
  
}

const render = () => {
  const book = new Book();
  bookContainer.innerHTML = null;
  if (localStorage.getItem('books')) {
    booksArr = JSON.parse(localStorage.getItem('books'));
  }
  for (let i = 0; i < booksArr.length; i += 1) {
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBookBtn = document.createElement('button');
    const lineBreak = document.createElement('hr');
    bookTitle.textContent = booksArr[i].title;
    bookAuthor.textContent = booksArr[i].author;
    removeBookBtn.textContent = 'Remove';
    bookDiv.append(bookTitle, bookAuthor, removeBookBtn, lineBreak);
    bookContainer.appendChild(bookDiv);
    removeBookBtn.addEventListener('click', () => {
      bookDiv.remove();
      book.removeBook(i);
    });
  }
};

render();

addBookBtn.addEventListener('click', () => {
  const book = new Book(titleInput.value, authorInput.value);
  book.add(book);
});
