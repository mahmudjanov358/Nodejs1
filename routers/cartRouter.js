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

// ----postCart
/**
 * @swagger
 * /cart/postCart:
 *   post:
 *     summary: Yangi Cart qo'shish
 *     tags: [Cart]
 *     description: Cart ro'yxatdan o'tkazilmoqda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 description: User ID
 *               car_id:
 *                 type: string
 *                 description: Car ID
 *               product_id:
 *                 type: string
 *                 description: Product ID
 *               house_id:
 *                 type: string
 *                 description: House ID
 *               book_id:
 *                 type: string
 *                 description: Book ID
 *     responses:
 *       '200':
 *         description: Cart created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Internal Server Error
 */
cart.post("/postCart", cartValidation(postCartValidationSchema), postCart);

// ----getCart
/**
 * @swagger
 * /cart/getCart:
 *   get:
 *     summary: Barcha Cartlarni olish
 *     tags: [Cart]
 *     description: Barcha Cartlar ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Cartlar List
 *       '500':
 *         description: Internal Server Error
 */
cart.get("/getCart", getCart);

// ----getCartById
/**
 * @swagger
 * /cart/getCartById/{id}:
 *   get:
 *     summary: Cartni ID bo'yicha olish
 *     tags: [Cart]
 *     description: Cartni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cartni ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cart found
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Internal Server Error
*/
cart.get("/getCartById/:id", getCartById);

// ----deleteCart
/**
 * @swagger
 * /cart/deleteCart/{id}:
 *   delete:
 *     summary: Cartni o'chirish
 *     tags: [Cart]
 *     description: Cartni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Cart to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cart deleted successfully
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Internal Server Error
 */
cart.delete("/deleteCart/:id", deleteCart);

module.exports = { cart }; // ----Exporting Cart Router
