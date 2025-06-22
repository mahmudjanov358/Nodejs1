const { Router } = require("express"); // ----Express Router
const cart = Router(); // ----Cart Router Instance

const {
  postCart,
  getCart,
  getCartById,
  deleteCart,
} = require("../controllers/cart.controller"); // ----Cart Controllers Functions

const { postCartValidationSchema } = require("../validations/cartValidation"); //----Cart Validations Functions

const cartValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
}; // ----Function for Validation

// ----Paths
cart.post("/postCart", cartValidation(postCartValidationSchema), postCart);
cart.get("/getCart", getCart);
cart.get("/getCartById/:id", getCartById);
cart.delete("/deleteCart/:id", deleteCart);

module.exports = { cart }; // ----Exporting Cart Router
