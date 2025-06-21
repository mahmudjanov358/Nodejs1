const Joi = require("joi"); // ----------Joi library----------

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.string().required(),
  car_id: Joi.string().required(),
  product_id: Joi.string().required(),
  house_id: Joi.string().required(),
}); //----------postCart Validation Function----------
