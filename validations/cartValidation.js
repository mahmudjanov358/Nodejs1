const Joi = require("joi"); // ----Joi Library

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.string().optional(),
  car_id: Joi.string().optional(),
  product_id: Joi.string().optional(),
  house_id: Joi.string().optional(),
  book_id: Joi.string().optional(),
}); //----postCart Validation Function
