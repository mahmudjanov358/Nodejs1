const Joi = require("joi"); // ----------Joi library----------

// ----------postUser Validation Schema----------
exports.postUserValidationSchema = Joi.object({
  username: Joi.string().required().trim().min(3).max(30),
  password: Joi.string()
    .required()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstName: Joi.string(),
  lastName: Joi.string(),
  birthday: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  car_id: Joi.string(),
  product_id: Joi.string(),
  house_id: Joi.string(),
});

// ----------updateUser Validation Schema----------
exports.updateUservalidationSchema = Joi.object({
  username: Joi.string().required().trim().min(3).max(30),
  password: Joi.string()
    .required()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstName: Joi.string(),
  lastName: Joi.string(),
  birthday: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  car_id: Joi.string(),
  product_id: Joi.string(),
  house_id: Joi.string(),
});
