const express = require("express");
const booksController = require("../controllers/index");
const router = express.Router();

router.get("/", booksController.getRoot);

module.exports = router;
