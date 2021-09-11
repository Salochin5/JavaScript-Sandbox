// Book Constructor - Handles creating the book Object
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor - A set of prototype methods to do things like adding, deleting books to the list, anything dealing with the UI
function UI() {}

// Create a Prototype
UI.prototype.addBookToList = function(book) {
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

// Show Alerts
UI.prototype.showAlert = function(msg, className) {
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

// Delete Book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners for Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate the Book Object
    const book = new Book(title, author, isbn);

    console.log(book);

    // Instatiate the UI Object
    const ui = new UI();

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add Book To List
        ui.addBookToList(book);

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

    ui.deleteBook(e.target);

    // Show Alert
    ui.showAlert('Book Removed Successfully', 'success');

    e.preventDefault();
})