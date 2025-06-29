const { Router } = require("express"); // ----Express Router
const product = Router(); // ----Product Router Instance

const {
  postProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller"); // ----Product Controller Functions

const {
  postProductValidationSchema,
  updateProductValidationSchema,
} = require("../validations/productValidation"); // ----Product Validations Functions
const productValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
}; // ----Function for Validation

// ----postProduct
/**
 * @swagger
 * /product/postProduct:
 *   post:
 *     summary: Yangi Prosuct qo'shish
 *     tags: [Product]
 *     description: Yangi Product qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Product Title
 *               description:
 *                 type: string
 *                 description: Product Description
 *               price:
 *                 type: number
 *                 description: Product Price
 *               isActive:
 *                 type: boolean
 *                 description: Product isActive
 *               sellerName:
 *                 type: string
 *                 description: Product SellerName
 *               sellerLastName:
 *                 type: string
 *                 description: Product SellerLastName
 *               sellerPhone:
 *                 type: string
 *                 description: Product SellerPhone
 *               count:
 *                 type: number
 *                 description: Product Count
 *     responses:
 *       '200':
 *         description: Product created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Internal Server Error
*/
product.post(
  "/postProduct",
  productValidation(postProductValidationSchema),
  postProduct
);

// ----getProduct
/**
 * @swagger
 * /product/getProduct:
 *   get:
 *     summary: Barcha Productlarni olish
 *     tags: [Product]
 *     description: Barcha Productlar ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Productlar List
 *       '500':
 *         description: Internal Server Error
 */
product.get("/getProduct", getProduct);

// ----getProductById
/**
 * @swagger
 * /product/getProductById/{id}:
 *   get:
 *     summary: Mahsulotni ID bo'yicha olish
 *     tags: [Product]
 *     description: Mahsulotni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Mahsulotni ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product found
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
*/
product.get("/getProductById/:id", getProductById);

// ----updateProduct
/**
 * @swagger
 * /product/updateProduct/{id}:
 *   patch:
 *     summary: Productni yangilash
 *     tags: [Product]
 *     description: Productni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Productni ID orqali yangilash
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Product Title
 *               description:
 *                 type: string
 *                 description: Product Description
 *               price:
 *                 type: number
 *                 description: Product Price
 *               sellerName:
 *                 type: string
 *                 description: Product SellerName
 *               sellerLastName:
 *                 type: string
 *                 description: Product SellerLastName
 *               sellerPhone:
 *                 type: string
 *                 description: Product SellerPhone
 *               count:
 *                 type: number
 *                 description: Product Count
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */
product.patch(
  "/updateProduct/:id",
  productValidation(updateProductValidationSchema),
  updateProduct
);

// ----deleteProduct
/**
 * @swagger
 * /product/deleteProduct/{id}:
 *   delete:
 *     summary: Productni o'chirish
 *     tags: [Product]
 *     description: Productni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Product to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */
product.delete("/deleteProduct/:id", deleteProduct);

module.exports = { product }; // ----Exporting Product Router
