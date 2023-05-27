const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "http://placekitten.com/350/350" },
  year: { type: Number, required: true },
  quantity: { type: String },
  imageURL: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
