// ----------Book Controller----------
const { Book } = require("../models/bookSchema");

// ----------postBook----------
exports.postBook = async (req, res) => {
  try {
    const { title, author, publishYear, pages, genre, price } = req.body;
    const newBook = new Book({
      title,
      author,
      publishYear,
      pages,
      genre,
      price,
    });
    await newBook.save();

    return res.status(201).json({
      success: true,
      message: "Book create successfully!",
    });
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------getBook----------
exports.getBook = async (req, res) => {
  try {
    const book = await Book.find({});
    return res.status(200).json({
      success: false,
      message: "Books List!",
      books: book,
    });
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------getBookById----------
exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
        book: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Book found successfully!",
        book: book,
      });
    }
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------updateBook----------
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear, pages, genre, price } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        publishYear,
        pages,
        genre,
        price,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Book updated successfully!",
        book: updatedBook,
      });
    }
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------deleteBook----------
exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
        book: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Book deleted successfully!",
        book: book,
      });
    }
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
