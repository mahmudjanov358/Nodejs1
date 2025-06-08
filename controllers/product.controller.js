// ----------Product Controller----------
const { Product } = require("../models/productSchema");

// ----------postProduct----------
exports.postProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      isActive,
      sellerName,
      sellerLastName,
      sellerPhone,
      count,
    } = req.body;
    const existingProduct = await Product.findOne({ title });
    console.log(`Existing Car: ${existingProduct}`);

    if (existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product with this title already exists",
      });
    } else {
      const newProduct = new Product({
        title,
        description,
        price,
        isActive,
        sellerName,
        sellerLastName,
        sellerPhone,
        count,
      });
      await newProduct.save();

      return res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: newProduct,
      });
    }
  } catch (eror) {
    console.error("Error — ", eror);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ----------getProducts----------
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products: product,
    });
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ----------getProductById----------
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        product: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product found successfully",
        product: product,
      });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ----------updateProduct----------
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      price,
      isActive,
      sellerName,
      sellerLastName,
      sellerPhone,
      count,
    } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        isActive,
        sellerName,
        sellerLastName,
        sellerPhone,
        count,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: updatedProduct,
      });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ----------deleteProduct----------
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
