const db = require("../models/index");

const getRoot = (req, res) => {
  try {
    db.Book.find()
      .then((books) => {
        res.status(200).json(books);
      })
      .catch((err) => {
        res.status(500).json({
          message: "show all books unsuccessful",
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json({
      message: "show all books unsuccessful",
    });
    console.log(error);
  }
};

const getBook = (req, res) => {
  try {
    db.Book.findById(req.params.id).then((book) => {
      res.status(200).json(book);
    });
  } catch (error) {
    res.status(500).json({
      message: "get book unsuccessful",
    });
    console.log(error);
  }
};

const insertBooks = (req, res) => {
  db.Book.insertMany([
    {
      title: "The Shinobi Initiative",
      description:
        "The reality-bending adventures of a clandestine service agency in the year 2166",
      year: 2014,
      quantity: 10,
      imageURL: "https://imgur.com/LEqsHy5.jpeg",
    },
    {
      title: "Tess the Wonder Dog",
      description: "The tale of a dog who gets super powers",
      year: 2007,
      quantity: 3,
      imageURL: "https://imgur.com/cEJmGKV.jpg",
    },
    {
      title: "The Annals of Arathrae",
      description:
        "This anthology tells the intertwined narratives of six fairy tales.",
      year: 2016,
      quantity: 8,
      imageURL: "https://imgur.com/VGyUtrr.jpeg",
    },
    {
      title: "Wâˆ€RP",
      description:
        "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
      year: 2010,
      quantity: 4,
      imageURL: "https://imgur.com/qYLKtPH.jpeg",
    },
  ])
    .then(
      res.status(200).json({
        message: "Seed successful",
      })
    )
    .catch(
      res.status(400).json({
        message: "Seed unsuccessful",
      })
    );
};

const updateBook = (req, res) => {
  console.log("router.put=>/:id, req.body" + req.body);
  console.log("router.put=>/:id, req.params.id" + req.params.id);
  db.Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({
        message: "Book update successful",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Book update unsuccessful",
      });
      console.log("err", err);
    });
};

const deleteBook = (req, res) => {
  console.log("router.delete=>/:id, req.body" + req.body);
  console.log("router.delete=>/:id, req.params.id" + req.params.id);
  db.Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Book delete successful",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Book deleted unsuccessful",
      });
      console.log("err", err);
    });
};

const addBook = (req, res) => {
  db.Book.create(req.body)
    .then(() => {
      res.status(200).json({
        message: "Book added successful",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Book added unsuccessful",
      });
      console.log("err", err);
    });
};

//!!THIS HAS TO BE THE VERY LAST LINE OF THE FILE!!
module.exports = {
  getRoot,
  getBook,
  insertBooks,
  addBook,
  deleteBook,
  updateBook,
};
