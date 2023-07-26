let myLibrary = [];

const modal = document.querySelector('#modal');
const addBook = document.querySelector('#add-book');
const submitButton = document.querySelector('.submit-button');
const closeButton = document.querySelector('.close-button');

addBook.addEventListener("click", () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
})

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    myLibrary.forEach(element => {
        console.log(element)
    });
}

