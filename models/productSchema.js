// ----------Importing Mongoose(Schema, Model)----------
const { Schema, model } = require("mongoose");

// ----------Defining the Product Schema----------
const productSchema = new Schema({
  title: { type: String, unique: true },
  description: { type: String },
  price: { type: Number },
  isActive: { type: Boolean },
  sellerName: { type: String },
  sellerLastName: { type: String },
  sellerPhone: { type: String },
  count: { type: Number },
});

// ----------Exporting the Product Model----------
const Product = model("Product", productSchema);
module.exports = { Product };
