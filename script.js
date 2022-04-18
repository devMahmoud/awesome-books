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
}

function removeBook(index, book) {
  book.remove();
  booksArr.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(booksArr));
}

const render = () => {
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
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(removeBookBtn);
    bookDiv.appendChild(lineBreak);
    bookContainer.appendChild(bookDiv);
    removeBookBtn.addEventListener('click', () => {
      removeBook(i, bookDiv);
    });
  }
};

render();

const add = (title, author) => {
  const book = new Book(title, author);
  booksArr.push(book);
  localStorage.setItem('books', JSON.stringify(booksArr));
  render();
};

addBookBtn.addEventListener('click', () => {
  add(titleInput.value, authorInput.value);
});
