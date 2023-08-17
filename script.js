const myLibrary = [
    {
        title: "Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    },
    {
        title: "Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
];

// DOM ELEMENTS
const newBook = document.querySelector('#add-book');
const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const books = document.querySelector('.books');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add initial books from myLibrary to the display
myLibrary.forEach((book, index) => {
    const newBookCard = addBookCard(book, index);
    books.appendChild(newBookCard);
});

function addBookToLibrary() {
    const titleValue = bookTitle.value;
    const authorValue = author.value;
    const pagesValue = parseInt(pages.value);
    const readValue = document.querySelector('#read').value === 'true';

    const newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);

    const newBookCard = addBookCard(newBook);
    books.appendChild(newBookCard);

    // Clear the input fields
    bookTitle.value = '';
    author.value = '';
    pages.value = '';
    document.querySelector('#read').selectedIndex = 0;
}

newBook.addEventListener("click", function (event) {

    event.preventDefault();

    const titleValue = bookTitle.value;
    const authorValue = author.value;
    const pagesValue = pages.value;

    if (titleValue === '' || authorValue === '' || pagesValue === '') {
        alert("Please fill in all fields before adding the book.");
    } else {
        addBookToLibrary();
    }
});


console.log(myLibrary);

function addBookCard(book, index) {
    const card = document.createElement('div');
    card.classList.add('books-card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;

    const readElement = document.createElement('p');
    readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList = 'delete-button'
    deleteButton.dataset.index = index;
    deleteButton.addEventListener('click', deleteBook);

    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(readElement);
    card.appendChild(deleteButton);

    return card;
}

function deleteBook(event) {
    const index = event.target.dataset.index;
    if (index !== undefined) {
        myLibrary.splice(index, 1);
        updateDisplay();
    }
}

function updateDisplay() {
    // Clear the current display
    books.innerHTML = '';

    // Update the display with the updated library
    myLibrary.forEach((book, index) => {
        const newBookCard = addBookCard(book, index);
        books.appendChild(newBookCard);
    });
}


