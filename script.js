let myLibrary = [];
let bookName;
let authorName;
let pagesNumber;
let readYesOrNo;
const mainContainer = document.querySelector('.container');
const displayContainer = document.querySelector('.displayContainer');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(myLibrary);
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

// Display of each books informations
function displayBook(array) {

    // Remove the other cards displayed, otherwise it's gonna reprint the whole array instead of print the new element only
    const removeCards = document.querySelectorAll('.displayBookContainer');
    for (let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    array.forEach(e => {
        // create and append book display container to the parent display container 
        const displayBookContainer = document.createElement('div');
        displayBookContainer.classList.add('displayBookContainer');
        displayContainer.appendChild(displayBookContainer);
        for (let key in e) {
            // for each key, create a P and give it a text of key's value;
            const pBook = document.createElement('p');
            pBook.textContent = `${key}: ${e[key]}`;
            displayBookContainer.appendChild(pBook);
        }
    });
}

// When add book button is pressed
const button = document.querySelector('.newBookButton');
button.addEventListener('click', () => {
    bookName = document.querySelector('[name="book"]').value;
    authorName = document.querySelector('[name="author"]').value;
    pagesNumber = document.querySelector('[name = "pages"]').value;
    readYesOrNo = document.querySelector('[name = "readOrNot"]:checked').value;
    addBookLibrary(bookName, authorName, pagesNumber, readYesOrNo);
    clearInputValues();
});


