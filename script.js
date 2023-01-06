let myLibrary = [];
const mainContainer = document.querySelector('.container');
const displayContainer = document.querySelector('.displayContainer');
let index = 0;

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayBook();
}

function formData() {
    let title = document.querySelector('[name="book"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name = "pages"]').value;
    let readStatus = document.querySelector('[name = "readOrNot"]').checked;

    if ((title == "") || (author == "") || (pages == "")) {
        alert("Please fill all the elements in the form");
    } else {
        addBookLibrary(title, author, pages, readStatus);
    }
}

function resetVariables() {
    let elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'text' || elements[i].type == 'number' || elements[i].type == 'radio') {
            elements[i].value = '';
        };
    };
};

function displayBook() {
    document.querySelector('.newBookButton').addEventListener('click', (e) => {
        e.preventDefault();
    });

    const removeDisplayBook = document.querySelectorAll('.displayBookContainer');
    for (let i = 0; i < removeDisplayBook.length; i++) {
        removeDisplayBook[i].remove();
    }

    index = 0

    myLibrary.forEach(element => {
        const displayBookContainer = document.createElement('div');
        displayBookContainer.classList.add('displayBookContainer');
        displayBookContainer.setAttribute("data-index", index);
        displayContainer.appendChild(displayBookContainer);
        for (let key in element) {
            //  for each key, create a P and give it a text of key's value;
            if (key == 'read') {
                const readButton = document.createElement('button');
                if (element[key] === true) {
                    readButton.className = 'readYesButton';
                    readButton.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: Yes`;
                    displayBookContainer.appendChild(readButton);
                } else {
                    readButton.className = 'readNoButton';
                    readButton.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: No`;
                    displayBookContainer.appendChild(readButton);
                };
                //Change button class according to the book's read status
                readButton.addEventListener('click', (e) => {
                    if (element[key] === true) {
                        element[key] = false;
                        readButton.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: No`;
                        readButton.className = 'readNoButton';
                        // readButton.classList.add('readNoButton');
                    } else if (element[key] === false) {
                        element[key] = true;
                        readButton.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: Yes`;
                        readButton.className = 'readYesButton';
                    }
                    e.preventDefault();
                });
            } else {
                const pBook = document.createElement('p');
                pBook.textContent = `${`${key[0].toUpperCase()}${key.substring(1)}`}: ${element[key]}`;
                displayBookContainer.appendChild(pBook);
            }
        }
        index++;
        //Delete button so we can remove a book from our library
        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add('deleteBookButton');
        deleteBookButton.textContent = 'Delete book';
        displayBookContainer.appendChild(deleteBookButton);

        //Delete button functionality
        deleteBookButton.addEventListener('click', (e) => {
            e.preventDefault();
            let indexBook = displayBookContainer.getAttribute('data-index');
            myLibrary.splice(indexBook, 1);
            displayBookContainer.remove();
        });
    });
};

const addBookButton = document.querySelector('.newBookButton');
addBookButton.addEventListener('click', () => {
    formData();
    resetVariables();
});


addBookLibrary('Sample1', 'random1', 1, true);
addBookLibrary('Sample2', 'random2', 2, false);
