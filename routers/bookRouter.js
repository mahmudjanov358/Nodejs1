const { Router } = require("express"); //----------Express Router----------
const book = Router(); //----------Book Router Instance--------

const {
  postBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller"); // ----------Book Controller Functions----------

// ----------Paths----------
book.post("/postBook", postBook);
book.get("/getBook", getBook);
book.get("/getBook/:id", getBookById);
book.put("/updateBook/:id", updateBook);
book.delete("/deleteBook/:id", deleteBook);

// ----------Exporting Router Book----------
module.exports = { book };
