const { Cart } = require("../models/cartSchema");

// ----------createCart----------
exports.postCart = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;

    const newCart = await Cart({
      user_id,
      product_id,
    });
    await newCart.save();

    return res.status(201).json({
      success: true,
      message: "Cart created!",
    });
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------readCart----------
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({});
    return res.status(200).json({
      success: true,
      message: "Cart is products",
      carts: cart,
    });
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------readCartById----------
exports.getCartById = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await Cart.findById(cartId).populate("user_id product_id");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
        cart: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart found successfully!",
        cart: cart,
      });
    }
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------deleteCart----------
exports.deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await Cart.findByIdAndDelete(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
        cart: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart deleted successfully!",
        cart: cart,
      });
    }
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
