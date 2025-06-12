const { Router } = require("express"); // ----------Express Router----------
const user = Router(); // ----------User Router Instance----------

const {
  postUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/user.controller"); // ----------User Controller Functions----------

// ----------Paths----------
user.post("/postUser", postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.put("/updateUser/:id", updateUser);
user.delete("/deleteUser/:id", deleteUser);
user.post("/loginUser", loginUser);

// ----------Exporting User Router----------
module.exports = { user };
