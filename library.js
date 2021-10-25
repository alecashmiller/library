let myLibrary = [];
form = document.getElementById('newBookForm');
let bookTitle = document.getElementById('bookTitle');
let bookAuthor = document.getElementById('bookAuthor');
let bookPages = document.getElementById('bookPages');
let bookRead = document.getElementById('bookRead');
let newBookContainer = document.getElementById('newBookContainer');
let bookTable = document.getElementById('bookTable');


function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}






newBook = document.getElementById('newBook');
newBookContainer = document.getElementById('newBookContainer');

newBook.addEventListener('click', () => {
    newBookForm.style.display = 'flex';
})




function addBookToLibrary() {
    myLibrary.push(newBook);
}



submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = bookRead.checked;

    newBook = new Book(title,author,pages,read);
    addBookToLibrary();
    console.log(myLibrary);
    displayBooks();
})





// newBox = document.createElement('div');
// newBox.className = 'boxbox'
// newBookContainer.append(newBox);


function displayBooks() {
    let newRow = document.createElement('tr');
    bookTable.appendChild(newRow);
    let titleCell = document.createElement('th');
    titleCell.textContent = bookTitle.value;
    titleCell.classList.add('cellContainer');
    newRow.appendChild(titleCell);
    let authorCell = document.createElement('th');
    authorCell.textContent = bookAuthor.value;
    authorCell.classList.add('cellContainer');
    newRow.appendChild(authorCell);
    let pagesCell = document.createElement('th');
    pagesCell.textContent = bookPages.value;
    pagesCell.classList.add('cellContainer');
    newRow.appendChild(pagesCell);

    let readCell = document.createElement('th');
    if (bookRead.checked) {
        readCell.textContent = "Yes";
    } else {
        readCell.textContent = 'No';
    }
    newRow.appendChild(readCell);

    let removeButton = document.createElement('button');
    removeButton.setAttribute('id','removeButton');
    removeButton.textContent = 'Remove';
    newRow.appendChild(removeButton);

}
submitButton.addEventListener('click', () => {
    newBookForm.style.display = 'none';
})
