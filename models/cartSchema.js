const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Car } = require("./carSchema");
const { Product } = require("./productSchema");
const { House } = require("./houseSchema");

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  car_id: { type: Schema.Types.ObjectId, ref: Car, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  house_id: { type: Schema.Types.ObjectId, ref: House, required: true },
});

const Cart = model("Cart", cartSchema);
module.exports = { Cart };
