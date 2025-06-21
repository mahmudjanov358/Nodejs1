const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  publishYear: { type: String, required: true },
  pages: { type: Number, required: true },
  genre: { type: String, enum: ["Drama", "Fantasy", "History"] },
  price: { type: Number, required: true },
});

const Book = model("Book", bookSchema);
module.exports = { Book };
