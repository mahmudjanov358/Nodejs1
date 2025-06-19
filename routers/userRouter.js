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

const {
  postUserValidationSchema,
  updateUservalidationSchema,
} = require("../validations/userValidation"); //----------User Validations Functions----------

// ----------User Validation Function----------
const userValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

// ----------Paths----------
user.post("/postUser", userValidation(postUserValidationSchema), postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.put(
  "/updateUser/:id",
  userValidation(updateUservalidationSchema),
  updateUser
);
user.delete("/deleteUser/:id", deleteUser);
user.post("/loginUser", loginUser);

// ----------Exporting User Router----------
module.exports = { user };
