let myLibrary = [];
const mainContainer = document.querySelector('.container');
const displayContainer = document.querySelector('.displayContainer');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook();
}

function formData() {
    let title = document.querySelector('[name="book"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name = "pages"]').value;
    let readStatus = document.querySelector('[name = "readOrNot"]:checked').value;

    // if (document.querySelector('[name = "readOrNot"]:checked').value === true) {
    //     readStatus = 'read';
    // } else {
    //     readStatus = 'not read';
    // }

    if ((title == "") || (author == "") || (pages == "")) {
        alert("Please fill all the elements in the form");
    }
    console.log(document.querySelector('[name = "readOrNot"]:checked').value)
    addBookLibrary(title, author, pages, readStatus);
}

function resetVariables() {
    let elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'text' || elements[i].type == 'number' || elements[i].type == 'radio') {
            elements[i].value = '';
        }
    }
}

function displayBook() {
    const removeDisplayBook = document.querySelectorAll('.displayBookContainer');
    for (let i = 0; i < removeDisplayBook.length; i++) {
        removeDisplayBook[i].remove();
    }

    document.querySelector('.newBookButton').addEventListener('click', (e) => {
        e.preventDefault();
    });

    myLibrary.forEach(element => {
        const displayBookContainer = document.createElement('div');
        displayBookContainer.classList.add('displayBookContainer');
        // displayBookContainer.setAttribute("data-index", `${arrayIndex}`);
        displayContainer.appendChild(displayBookContainer);
        for (let key in element) {
            // for each key, create a P and give it a text of key's value;
            const pBook = document.createElement('p');
            pBook.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: ${element[key]}`;
            displayBookContainer.appendChild(pBook);
        }
    });
};

const addBookButton = document.querySelector('.newBookButton');
addBookButton.addEventListener('click', () => {
    formData();
    resetVariables();
});

addBookLibrary('Sample1', 'random1', 1, 'Yes');
addBookLibrary('Sample2', 'random2', 2, 'No');
