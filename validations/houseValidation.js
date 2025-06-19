const Joi = require("joi"); //----------Joi library----------

exports.postHouseValidationSchema = Joi.object({
  region: Joi.string().required(),
  city: Joi.string().required(),
  house_number: Joi.number().required(),
  street: Joi.string().required(),
  family_members: Joi.number().required(),
  location: Joi.string().required(),
}); //----------postHouse Validations----------

exports.updateHouseValidationSchema = Joi.object({
  region: Joi.string().required(),
  city: Joi.string().required(),
  house_number: Joi.number().required(),
  street: Joi.string().required(),
  family_members: Joi.number().required(),
  location: Joi.string().required(),
}); //----------updateHouse Validations----------
