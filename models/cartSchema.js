const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Product } = require("./productSchema");

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
});

const Cart = model("Cart", cartSchema);
module.exports = { Cart };
