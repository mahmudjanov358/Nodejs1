const { Router } = require("express");
const cart = Router();

const {
  postCart,
  getCart,
  getCartById,
  deleteCart,
} = require("../controllers/cart.controller");

const { postCartValidationSchema } = require("../validations/cartValidation"); //----------Cart Validations Functions----------

const cartValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

cart.post("/postCart", cartValidation(postCartValidationSchema), postCart);
cart.get("/getCart", getCart);
cart.get("/getCartById/:id", getCartById);
cart.delete("/deleteCart/:id", deleteCart);

module.exports = { cart };
