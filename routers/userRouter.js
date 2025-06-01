const { Router } = require("express");
const user = Router();

const {
  postUser,
  getUser,
  getUserById,
  deleteUser,
} = require("../controllers/user.controller");

user.post("/postUser", postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.delete("/deleteUser/:id", deleteUser);

module.exports = { user };
