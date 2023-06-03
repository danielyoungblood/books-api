require("dotenv").config();

const express = require("express");
const booksRouter = require("./routes/books");
const rootRouter = require("./routes/root");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", rootRouter);

//provides webpage for http://localhost:4000/books
app.use("/books", booksRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
