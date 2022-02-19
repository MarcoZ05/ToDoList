const noteDiv = document.getElementById("note-container");
const bookDiv = document.getElementById("book-container");
const inputDiv = document.getElementById("input-container");

function addNewBook() {
    bookDiv.appendChild(document.createElement("div")).setAttribute("class","book-entry")
}

addNewBook()