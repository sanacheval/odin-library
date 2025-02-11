const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
    }
}
function removeBook(removeId){
    myLibrary.splice(removeId, 1);
    displayLibrary();
}
function readBook(currBook){
    myLibrary[currBook].read = "read";
    displayLibrary();
}

function addBookToLibrary(title, author, pages, read) {
    let currBook = new Book(title, author, pages, read);
    myLibrary.push(currBook);
}

function displayLibrary() {
    document.getElementById("books").innerHTML = "";
    for (let i=0; i<myLibrary.length; i++) {
        document.getElementById("books").innerHTML += `<div class="book"><p>${myLibrary[i].info()}</p> <button onclick="removeBook(${i})">Remove Book</button> <button onclick="readBook(${i})">Read</button> </div> `
    }
}

function addBookButton() {
    document.getElementById("addBook").innerHTML = 
    `<form action="javascript:submitBook()" method="post">
        <label for="title">Title:</label>
        <input type="text" id="title">

        <label for="author">Author:</label>
        <input type="text" id="author">

        <label for="pages">Number of Pages:</label>
        <input type="text" id="pages">

        <label for="read">Read/Not Read</label>
        <input type="text" id="read">

        <button type="submit" id="submit">Add</button>
    </form>`;
}

function submitBook() {
    addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').value);
    displayLibrary();
    document.getElementById("addBook").innerHTML = `<button onclick="addBookButton()">Add Book</button>`;
}


addBookToLibrary("The Hobbit", "JRR Tolkein", "295", "have not read");
addBookToLibrary("Radio Silence", "Alice Oseman", "480 pages", "read");
displayLibrary();