const Joi = require("joi"); //----Joi Library

const genreOptions = [
  "Novel",
  "Poetry",
  "Science",
  "Biography",
  "Fantasy",
  "History",
  "Other",
]; //----Function for Genre

exports.postBookValidationSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .pattern(/^[A-Za-z0-9\s'":,!?()-]+$/)
    .required()
    .messages({
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title must not exceed 100 characters",
      "string.pattern.base": "Title contains invalid characters",
    }),
  author: Joi.string()
    .trim()
    .min(3)
    .max(60)
    .pattern(/^[A-Za-z\s.'-]+$/)
    .required()
    .messages({
      "string.empty": "Author is required",
      "string.min": "Author name must be at least 3 characters",
      "string.max": "Author name must not exceed 60 characters",
      "string.pattern.base": "Author name format is invalid",
    }),
  publishYear: Joi.date().less("now").greater("1-1-1500").required().messages({
    "date.base": "Publish year must be a valid date",
    "date.less": "Publish year must be in the past",
    "date.greater": "Publish year must be after 1500",
  }),
  pages: Joi.number()
    .integer()
    .positive()
    .min(1)
    .max(5000)
    .required()
    .messages({
      "number.base": "Pages must be a number",
      "number.min": "Book must have at least 1 page",
      "number.max": "Page count seems too high",
    }),
  genre: Joi.string()
    .valid(...genreOptions)
    .optional()
    .messages({
      "any.only": `Genre must be one of: ${genreOptions.join(", ")}`,
    }),
  price: Joi.number().precision(2).min(1).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price cannot be negative",
    "number.max": "Price is too high",
  }),
}); // ----postBook Validation Schema

exports.updateBookValidationSchema = exports.postBookValidationSchema.fork(
  Object.keys(exports.postBookValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateBook Validation Schema
