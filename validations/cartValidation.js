const Joi = require("joi"); // ----------Joi library----------

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.required(),
  car_id: Joi.required(),
  product_id: Joi.required(),
  house_id: Joi.required(),
}); //----------postCart Validation Function----------
