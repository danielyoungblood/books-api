const db = require("../models/index");

const getRoot = (req, res) => {
  try {
    db.Book.find()
      .then((books) => {
        res.send(books);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

const getBook = (req, res) => {
  db.Book.findById(req.params.id).then((book) => {
    res.send(book);
  });
};

module.exports = { getRoot, getBook };
