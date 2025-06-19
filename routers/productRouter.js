const { Router } = require("express"); // ----------Express Router----------
const product = Router(); // ----------Product Router Instance----------

const {
  postProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller"); // ----------Product Controller Functions----------

const {
  postProductValidationSchema,
  updateProductValidationSchema,
} = require("../validations/productValidation"); // ----------Product Validations Functions----------
const { Schema } = require("mongoose");

const productValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

// ----------Paths----------
product.post(
  "/postProduct",
  productValidation(postProductValidationSchema),
  postProduct
);
product.get("/getProduct", getProduct);
product.get("/getProductById/:id", getProductById);
product.patch(
  "/updateProduct/:id",
  productValidation(updateProductValidationSchema),
  updateProduct
);
product.delete("/deleteProduct/:id", deleteProduct);

// ----------Exporting Product Router----------
module.exports = { product };
