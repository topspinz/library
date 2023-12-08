const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author=author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title},by ${this.author},${this.pages} pages,${read}`;
    };

}

function addBookToLibrary(book) {
    myLibrary.push(book);

}

const addBook=document.querySelector("#add-book");

addBook.addEventListener("click", function (e) {
    addBook.classList.add("active");
  });


// const theHobbit = new Book('The Hobbit','Toklein','255','not read');





// addBookToLibrary(theHobbit);
