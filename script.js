const booksContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBookBtn = document.querySelector('.add-book-btn');

const books = [];

class Book  {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
};

const render = () => {
    booksContainer.innerHTML = null;
    const books = JSON.parse(localStorage.getItem('books'));
    console.log(books);
    for(let i = 0; i <books.length; i += 1) {
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const removeBookBtn = document.createElement('button');
        const lineBreak = document.createElement('hr');
        bookTitle.textContent = books[i].title;
        bookAuthor.textContent = books[i].author;
        removeBookBtn.textContent = 'Remove';
        booksContainer.appendChild(bookTitle);
        booksContainer.appendChild(bookAuthor);
        booksContainer.appendChild(removeBookBtn);
        booksContainer.appendChild(lineBreak);
    }
};

render();

const add = (title, author) => {
    const book = new Book(title, author)
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    render();
};

addBookBtn.addEventListener('click', () => {
    add(titleInput.value, authorInput.value);
});
