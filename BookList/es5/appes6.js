class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create  a tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(msg, className) {
        // Create Div
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        // Add TextNode
        div.appendChild(document.createTextNode(msg));
        // Get a Parent
        const container = document.querySelector('.container');
        // Get Form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);
        // TimeOut After 3 Seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        })
    }

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listeners for Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate the Book Object
    const book = new Book(title, author, isbn);

    // console.log(book);

    // Instatiate the UI Object
    const ui = new UI();

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add Book To List
        ui.addBookToList(book);

        // Add to Local Storage
        Store.addBook(book);

        // Show Success
        ui.showAlert('Book Added', 'success');

        // Clear Fields
        ui.clearFields();
    }

    // console.log(ui);

    // console.log(title, author, isbn);


    e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate UI
    const ui = new UI();

    //Delete book 
    ui.deleteBook(e.target);

    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show Alert
    ui.showAlert('Book Removed Successfully', 'success');

    e.preventDefault();
})