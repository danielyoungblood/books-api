const express = require("express");
const booksController = require("../controllers/books");
const router = express.Router();

router.get("/seed", booksController.insertBooks);
router.get("/", booksController.getRoot);
router.get("/:id", booksController.getBook);

module.exports = router;
