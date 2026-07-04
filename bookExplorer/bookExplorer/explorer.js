

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pages: 309
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 374
    }
];



console.log("Book List:");

books.forEach(function(book) {
    console.log(book);
});



console.log("Entire document:");
console.log(document);

console.log("Document body:");
console.log(document.body);

console.log("First child of body:");
console.log(document.body.firstElementChild);

console.log("All children of body:");
console.log(document.body.children);




const bookList = document.body.children[2];

console.log("UL Element:");
console.log(bookList);

const firstBook = bookList.children[0];

console.log("One LI Element:");
console.log(firstBook);

console.log("Parent of LI:");
console.log(firstBook.parentElement);

console.log("Sibling of LI:");
console.log(firstBook.nextElementSibling);




console.log("Text inside LI:");
console.log(firstBook.textContent);

console.log("Node Type:");
console.log(firstBook.nodeName);




const heading = document.body.children[0];

console.log("Class Name:");
console.log(heading.className);




Sibling nodes are elements that share the same parent.
*/
