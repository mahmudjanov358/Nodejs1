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

// ----Paths
book.post("/postBook", bookValidation(postBookValidationSchema), postBook);
book.get("/getBook", getBook);
book.get("/getBookById/:id", getBookById);
book.put(
  "/updateBook/:id",
  bookValidation(updateBookValidationSchema),
  updateBook
);
book.delete("/deleteBook/:id", deleteBook);

module.exports = { book }; // ----Exporting Router Book
