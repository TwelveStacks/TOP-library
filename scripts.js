let myLibrary = [];

const modal = document.querySelector('#modal');
const addBook = document.querySelector('#add-book');
const submitButton = document.querySelector('.submit-button');
const closeButton = document.querySelector('.close-button');

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readCheck = document.querySelector('.read-checkbox')

addBook.addEventListener("click", () => {
    resetForm();
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

form.addEventListener("submit", () => {
    let newBook = new Book(title.value, author.value, pages.value, readCheck.checked)
    addBookToLibrary(newBook);
    console.log(myLibrary)
    console.log("Form submitted");
    console.log(newBook);
    console.log(myLibrary);
});

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(item) {
    myLibrary.push(item);
}

function displayBooks() {
    this.myLibrary.forEach(book => {
        console.log(book);
    });
}

function resetForm() {
    title.value = "";
    author.value = ""
    pages.value = "";
    read = false;
}

// Displaying book