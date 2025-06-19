const Joi = require("joi"); //----------Joi library----------

exports.postProductValidationSchema = Joi.object({
  title: Joi.string().required().min(1),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  isActive: Joi.boolean(),
  sellerName: Joi.string().required(),
  sellerLastName: Joi.string().required(),
  sellerPhone: Joi.string()
    .required()
    .pattern(/^\+998\d{9}$/),
  count: Joi.number().required(),
});

exports.updateProductValidationSchema = Joi.object({
  title: Joi.string().required().min(1),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  isActive: Joi.boolean(),
  sellerName: Joi.string().required(),
  sellerLastName: Joi.string().required(),
  sellerPhone: Joi.string()
    .required()
    .pattern(/^\+998\d{9}$/),
  count: Joi.number().required(),
});
