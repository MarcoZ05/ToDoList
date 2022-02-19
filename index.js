const noteContainer = document.getElementById("note-container");
const bookContainer = document.getElementById("book-container");
const inputContainer = document.getElementById("input-container");

let bookDiv = [];

function bookToDiv() {
    // ein neues div machen css-klasse book-entry und in bookDiv anhängen
    bookDiv[bookDiv.length] = document.createElement("div")
    bookDiv[bookDiv.length-1].setAttribute("class","book-entry")
    bookDiv[bookDiv.length-1].setAttribute("id","bookDiv"+bookDiv.length)
    bookContainer.appendChild(bookDiv[bookDiv-length-1])
}

bookToDiv()