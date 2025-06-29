const { Router } = require("express"); //----Express Router
const book = Router(); //----Book Router Instan

const {
  postBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller"); // ----Book Controller Functions

const {
  postBookValidationSchema,
  updateBookValidationSchema,
} = require("../validations/bookValidation");
const bookValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
};

// ----postBook
/**
 * @swagger
 * /book/postCar:
 *   post:
 *     summary: Yangi Book qo'shish
 *     tags: [Book]
 *     description: Book ro'yxatdan o'tkazilmoqda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Book nomini kiriting
 *               author:
 *                 type: string
 *                 description: Book Egasini kiriting
 *               publishYear:
 *                 type: string
 *                 description: Book Nashrini kiriting
 *               pages:
 *                 type: number
 *                 description: Book Pages sonini kiriting
 *               genre:
 *                 type: string
 *                 description: Book Janrini kiriting
 *               price:
 *                 type: number
 *                 description: Book Pulini kiriting
 *     responses:
 *       '200':
 *         description: Book created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Internal Server Error
 */
book.post("/postBook", bookValidation(postBookValidationSchema), postBook);

// ----getBook
/**
 * @swagger
 * /book/getBook:
 *   get:
 *     summary: Barcha Booklarni olish
 *     tags: [Book]
 *     description: Barcha Booklar ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Booklar List
 *       '500':
 *         description: Internal Server Error
 */
book.get("/getBook", getBook);

// ----getBookById
/**
 * @swagger
 * /book/getBookById/{id}:
 *   get:
 *     summary: Bookni ID bo'yicha olish
 *     tags: [Book]
 *     description: Bookni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Bookni ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book found
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal Server Error
*/
book.get("/getBookById/:id", getBookById);

// ----updateBook
/**
 * @swagger
 * /book/updateBook/{id}:
 *   put:
 *     summary: Bookni yangilash
 *     tags: [Book]
 *     description: Bookni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Bookni ID orqali yangilash
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
 *                 description: Book nomini kiriting
 *               author:
 *                 type: string
 *                 description: Book Egasini kiriting
 *               publishYear:
 *                 type: string
 *                 description: Book Nashrini kiriting
 *               pages:
 *                 type: number
 *                 description: Book Pages sonini kiriting
 *               genre:
 *                 type: string
 *                 description: Book Janrini kiriting
 *               price:
 *                 type: number
 *                 description: Book Pulini kiriting
 *     responses:
 *       '200':
 *         description: Book updated successfully
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal Server Error
 */
book.put(
  "/updateBook/:id",
  bookValidation(updateBookValidationSchema),
  updateBook
);

// ----deleteBook
/**
 * @swagger
 * /book/deleteBook/{id}:
 *   delete:
 *     summary: Bookni o'chirish
 *     tags: [Book]
 *     description: Bookni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Book to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book deleted successfully
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal Server Error
 */
book.delete("/deleteBook/:id", deleteBook);

module.exports = { book }; // ----Exporting Router Book
