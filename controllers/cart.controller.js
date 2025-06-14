const { Cart } = require("../models/cartSchema");

// ----------createCart----------
exports.createCart = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ----------readCart----------
exports.readCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------readCartById----------
exports.readCartById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------updateCart----------
exports.updateCart = async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
