const Joi = require("joi"); //----------Joi library----------

// ----------postCar Validation Schema----------
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
  price: Joi.number().required(),
});

// ----------updateCar Validation Schema----------
exports.updateCarValidationSchema = Joi.object({
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
  price: Joi.number().required(),
});
