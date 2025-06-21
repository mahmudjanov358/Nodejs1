const Joi = require("joi");

exports.bookValidationSchema = Joi.object({
  title: Joi.string().required().trim(),
  author: Joi.string().required().trim(),
  publishYear: Joi.date().required(),
  pages: Joi.number().required(),
  genre: Joi.string().optional(),
  price: Joi.number().required(),
});
