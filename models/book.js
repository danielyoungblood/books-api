require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  year: { type: Number, required: true },
  quantity: { type: Number },
  imageURL: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);


