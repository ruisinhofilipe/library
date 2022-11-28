let myLibrary = [];
let bookName;
let authorName;
let pagesNumber;
let readYesOrNo;
const mainContainer = document.querySelector('.container');
const displayContainer = document.querySelector('.displayContainer');

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

// Display of each book's informations
function displayBook(a, b, c, d) {

    // create and append book display container to the parent display container 
    let displayBookContainer = document.createElement('div');
    displayBookContainer.classList.add('displayBookContainer');
    displayContainer.appendChild(displayBookContainer);

    // create p that will display the book information
    let pBookName = document.createElement('p');
    let pAuthorName = document.createElement('p');
    let pPagesNumber = document.createElement('p');
    let pReadStatus = document.createElement('p');

    pBookName.textContent = `Book name: ${a}`;
    pAuthorName.textContent = `Author name: ${b}`;
    pPagesNumber.textContent = `Pages: ${c}`;
    pReadStatus.textContent = `Read status: ${d}`;

    displayBookContainer.appendChild(pBookName);
    displayBookContainer.appendChild(pAuthorName);
    displayBookContainer.appendChild(pPagesNumber);
    displayBookContainer.appendChild(pReadStatus);
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
    displayBook(bookName, authorName, pagesNumber, readYesOrNo);
    resetVariables();
    clearInputValues();
});





