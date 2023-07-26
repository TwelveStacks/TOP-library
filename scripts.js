let myLibrary = [];

const modal = document.querySelector('#modal');
const addBook = document.querySelector('#add-book');
const submitButton = document.querySelector('.submit-button');

addBook.addEventListener("click", () => {
    modal.showModal();
});

submitButton.addEventListener('click', () => {
    modal.close();
});

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    myLibrary.forEach(element => {
        console.log(element)
    });
}

