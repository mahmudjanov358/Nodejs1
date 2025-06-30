const Joi = require("joi"); //----Joi Library

exports.postHouseValidationSchema = Joi.object({
  region: Joi.string()
    .required()
    .messages({
      'string.base': 'Viloyat nomi matn bo\'lishi kerak',
      'string.empty': 'Viloyat nomi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Viloyat nomi majburiy maydon'
    }),

  city: Joi.string()
    .required()
    .messages({
      'string.base': 'Shahar nomi matn bo\'lishi kerak',
      'string.empty': 'Shahar nomi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Shahar nomi majburiy maydon'
    }),

  house_number: Joi.number()
    .required()
    .positive()
    .messages({
      'number.base': 'Uy raqami raqam bo\'lishi kerak',
      'number.positive': 'Uy raqami musbat raqam bo\'lishi kerak',
      'any.required': 'Uy raqami majburiy maydon'
    }),

  street: Joi.string()
    .required()
    .messages({
      'string.base': 'Ko\'cha nomi matn bo\'lishi kerak',
      'string.empty': 'Ko\'cha nomi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Ko\'cha nomi majburiy maydon'
    }),

  family_members: Joi.number()
    .required()
    .positive()
    .integer()
    .messages({
      'number.base': 'Oila a\'zolari soni raqam bo\'lishi kerak',
      'number.positive': 'Oila a\'zolari soni musbat raqam bo\'lishi kerak',
      'number.integer': 'Oila a\'zolari soni butun son bo\'lishi kerak',
      'any.required': 'Oila a\'zolari soni majburiy maydon'
    }),

  location: Joi.string()
    .required()
    .messages({
      'string.base': 'Joylashuv ma\'lumoti matn bo\'lishi kerak',
      'string.empty': 'Joylashuv ma\'lumoti bo\'sh bo\'lmasligi kerak',
      'any.required': 'Joylashuv ma\'lumoti majburiy maydon'
    })
}); //----postHouse Validations

exports.updateHouseValidationSchema = exports.postHouseValidationSchema.fork(
  Object.keys(exports.postHouseValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateHouse Validation Schema