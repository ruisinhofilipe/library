let myLibrary = [];
let bookName;
let authorName;
let pagesNumber;
let readYesOrNo;
const mainContainer = document.querySelector('.container')

function Book() {

}

Book.prototype.fullInfo = function () {
    return `${this.name} by ${this.author} has ${this.pages} pages. Read status: ${this.read}`
}

function addBookLibrary(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

addBookLibrary.prototype = Object.create(Book.prototype);

// Reset book variables
function resetVariables() {
    bookName = '';
    authorName = '';
    pagesNumber = '';
    readYesOrNo = '';
}

// Clear input values
function clearInputValues() {
    let elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'text' || elements[i].type == 'number') {
            elements[i].value = '';
        }
    }
}

// When add book button is pressed
const button = document.querySelector('.newBookButton');
button.addEventListener('click', () => {
    bookName = document.querySelector('[name="book"]').value;
    authorName = document.querySelector('[name="author"]').value;
    pagesNumber = document.querySelector('[name = "pages"]').value;
    readYesOrNo = document.querySelector('[name = "readOrNot"]:checked').value;
    const b1 = new addBookLibrary(bookName, authorName, pagesNumber, readYesOrNo);
    myLibrary.push(b1.fullInfo());
    resetVariables();
    clearInputValues();
})





