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
    createBook(newBook);
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

function createBook() {
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

function createBook(book) {
    const bookContainer = document.querySelector('.book-container');
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h3');
    const bookRead = document.createElement('button');
    const removeBook = document.createElement('button')

    bookDiv.classList.add('book'); 
    bookRead.classList.add('read-button');
    removeBook.classList.add('remove');
    bookTitle.textContent = "Title: " + book.name;
    bookAuthor.textContent = "Author: " + book.author;
    bookPages.textContent = "Pages: " + book.pages;

    if (book.read === true) {
        bookRead.textContent = "Read"; 
        bookRead.style.backgroundColor = "green";
    }
    else if (book.read === false) {
        bookRead.textContent = "Not read"
        bookRead.style.backgroundColor = "red";
    }
    
    bookRead.addEventListener("click", ()=> {
        console.log(bookRead.textContent)
        if(bookRead.textContent == "Read") {
            console.log("Change button color to red")
            bookRead.textContent = "Not read";
            bookRead.style.backgroundColor = "red";
            
        }
        else if (bookRead.textContent == "Not read") {
            console.log("Change button color to green")
            bookRead.textContent = "Read";
            bookRead.style.backgroundColor = "green";
        }
    })

    bookContainer.append(bookDiv);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
}



