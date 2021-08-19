const express = require("express");

const ourApp = express();

const database = require("./database")


ourApp.get("/", (request, response) => {
    response.json({message : "Hello there"});
        const specificBook = database.books.filter((book) => book.category.includes("tech"));

    console.log(specificBook);

})



// Route        -- books
// Des          -- to get all books
// Access       -- public
// Method       -- get
// Params       -- none
// Body         -- none

ourApp.get("/books", (req, res) => {
    res.json({books : database.books})
} )



// Route        -- books/:bookID
// Des          -- to get specific book based on ISBN
// Access       -- public
// Method       -- get
// Params       -- bookID
// Body         -- none

ourApp.get("/books/:bookID" , (req, res) => {
    const specificBook = database.books.filter((book) => book.ISBN == req.params.bookID);

    return res.json({books : specificBook});
});




// Route        -- /books/c/:category
// Des          -- to get a list of books based on category
// Access       -- public
// Method       -- get
// Params       -- category
// Body         -- none

ourApp.get("/books/c/:category" , (req, res) => {
    const specificBook = database.books.filter((book) => book.category.includes(req.params.category));

    console.log(specificBook);


    return res.json({books : specificBook});
});




// Route        -- /books/a/:author
// Des          -- to get a list of books based author
// Access       -- public
// Method       -- get
// Params       -- author
// Body         -- none

ourApp.get("/books/a/:author" , (req, res) => {
    const specificBook = database.books.filter((book) => book.authors.indexOf(req.params.author));
    console.log(specificBook);
    return res.json({books : specificBook});
});





// Route        -- /books/a/:author
// Des          -- to get a list of books based author
// Access       -- public
// Method       -- get
// Params       -- author
// Body         -- none

ourApp.get("/author" , (req, res) => {
    const authorAll = database.authors;
    console.log(authorAll);
    return res.json({books : authorAll});
});









ourApp.listen(5000, () => {console.log("Server at 4000")});