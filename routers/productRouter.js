const { Router } = require("express"); // ----------Express Router----------
const product = Router(); // ----------Product Router Instance----------

const {
  postProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller"); // ----------Product Controller Functions----------

// ----------Paths----------
product.post("/postProduct", postProduct);
product.get("/getProduct", getProduct);
product.get("/getProductById/:id", getProductById);
product.patch("/updateProduct/:id", updateProduct);
product.delete("/deleteProduct/:id", deleteProduct);

// ----------Exporting Product Router----------
module.exports = { product };
