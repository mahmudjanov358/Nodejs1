const { Router } = require("express");
const cart = Router();

const {
  postCart,
  getCart,
  getCartById,
  deleteCart,
} = require("../controllers/cart.controller");

cart.post("/postCart", postCart);
cart.get("/getCart", getCart);
cart.get("/getCartById/:id", getCartById);
cart.delete("/deleteCart/:id", deleteCart);

module.exports = { cart };
