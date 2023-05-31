require("dotenv").config();

const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
app.use(express.json());

//provides webpage for http://localhost:4000/books
app.use("/books", booksRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
