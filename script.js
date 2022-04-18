const booksContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBookBtn = document.querySelector('.add-book-btn');

let booksArr = [];

class Book  {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
};

const render = () => {
    booksContainer.innerHTML = null;
    if(localStorage.getItem('books')) {
        booksArr = JSON.parse(localStorage.getItem('books'));
    }
    for(let i = 0; i <booksArr.length; i += 1) {
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const removeBookBtn = document.createElement('button');
        const lineBreak = document.createElement('hr');
        bookTitle.textContent = booksArr[i].title;
        bookAuthor.textContent = booksArr[i].author;
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
    booksArr.push(book);
    localStorage.setItem('books', JSON.stringify(booksArr));
    render();
};

addBookBtn.addEventListener('click', () => {
    add(titleInput.value, authorInput.value);
});
