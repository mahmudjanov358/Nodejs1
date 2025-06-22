const Joi = require("joi"); //----Joi Library

exports.postHouseValidationSchema = Joi.object({
  region: Joi.string().required(),
  city: Joi.string().required(),
  house_number: Joi.number().required(),
  street: Joi.string().required(),
  family_members: Joi.number().required(),
  location: Joi.string().required(),
}); //----postHouse Validations

exports.updateHouseValidationSchema = exports.postHouseValidationSchema.fork(
  Object.keys(exports.postHouseValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateHouse Validation Schema
