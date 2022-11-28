let myLibrary = [];
const mainContainer = document.querySelector('.container')

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}



// New Book information container



//Getting add book button
const addBook = document.querySelector('.addButton');
addBook.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
})

