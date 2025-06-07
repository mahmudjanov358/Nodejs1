// ----------User
const { User } = require("../models/userSchema");

// ----------postUser
exports.postUser = async (req, res) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      birthday,
      jinsi,
      address,
      phone,
    } = req.body;
    const existingUser = await User.findOne({ username });
    console.log(`Existing User: ${existingUser}`);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Bu user bilan ro'yxatdan o'tgan foydalanuvchi mavjud!",
        innerData: null,
      });
    } else {
      const newUser = new User({
        username,
        password,
        firstName,
        lastName,
        birthday,
        jinsi,
        address,
        phone,
      });
      await newUser.save();

      return res.status(201).json({
        success: true,
        message: "User muvaffaqiyatli qo'shildi!",
        innerData: newUser,
      });
    }
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Register jarayonida xato yuz berdi!",
    });
  }
};

// ----------getUser
exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.json({
      success: true,
      message: "Users ro'yxati",
      innerData: user,
    });
  } catch (error) {
    console.log("Error fetching user:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Users ro'yxatini olishda xato yuz berdi!",
    });
  }
};

// ---------getUserById
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi",
        innerData: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User topildi",
        innerData: user,
      });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res.status(500).json({
      success: false,
      message:
        "Server xatosi: User ID bo'yicha ma'lumot olishda xato yuz berdi!",
    });
  }
};

// ----------updateUser
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      password,
      firstName,
      lastName,
      birthday,
      jinsi,
      address,
      phone,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        password,
        firstName,
        lastName,
        birthday,
        jinsi,
        address,
        phone,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi",
        innerData: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User muvaffaqiyatli yangilandi",
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: User yangilash jarayonida xato yuz berdi!",
    });
  }
};

// ----------deleteUser
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi",
        innerData: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User muvaffaqiyatli o'chirildi",
        innerData: user,
      });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: User o'chirish jarayonida xato yuz berdi!",
    });
  }
};
//
