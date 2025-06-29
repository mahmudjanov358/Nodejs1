const Joi = require("joi"); //----Joi Library

exports.postCarValidationSchema = Joi.object({
  title: Joi.string().required().min(1),
  model: Joi.string().required(),
  description: Joi.string().optional(),
  color: Joi.string().required(),
  horsePower: Joi.number().required(),
  carType: Joi.string().required(),
  charging: Joi.string().optional(),
  weight: Joi.string().required(),
  gasoline: Joi.string().required(),
  yearMachine: Joi.string().required(),
  price: Joi.string().required(),
}); // ----postCar Validation Schema

exports.updateCarValidationSchema = exports.postCarValidationSchema.fork(
  Object.keys(exports.postCarValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateCar Validation Schema
