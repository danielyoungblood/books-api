const express = require("express");
const booksController = require("../controllers/books");
const router = express.Router();


router.get("/seed", booksController.insertBooks);

//route for localhost:4000/books  (show all books)
router.get("/", booksController.getBooks);

//route for localhost:4000/books/<id>  (show a book)
router.get("/:id", booksController.getBook);

//route for localhost:4000/books/<id>  (update a book)
router.put("/:id", booksController.updateBook);

//route for localhost:4000/books/<id>   (delete a book)
router.delete("/:id", booksController.deleteBook);

//route for localhost:4000/books    (add a book)
router.post("/", booksController.addBook);

//!!THIS HAS TO BE THE VERY LAST LINE OF THE FILE!!
module.exports = router;
