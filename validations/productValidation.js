const Joi = require("joi"); //----Joi Library

exports.postProductValidationSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(1)
    .messages({
      'string.base': 'Mahsulot nomi matn bo\'lishi kerak',
      'string.empty': 'Mahsulot nomi bo\'sh bo\'lmasligi kerak',
      'string.min': 'Mahsulot nomi kamida 1 ta belgi bo\'lishi kerak',
      'any.required': 'Mahsulot nomi majburiy maydon'
    }),

  description: Joi.string()
    .optional()
    .messages({
      'string.base': 'Tavsif matn bo\'lishi kerak'
    }),

  price: Joi.number()
    .required()
    .positive()
    .messages({
      'number.base': 'Narx raqam bo\'lishi kerak',
      'number.positive': 'Narx musbat raqam bo\'lishi kerak',
      'any.required': 'Narx majburiy maydon'
    }),

  isActive: Joi.boolean()
    .messages({
      'boolean.base': 'Faollik holati true yoki false bo\'lishi kerak'
    }),

  sellerName: Joi.string()
    .required()
    .messages({
      'string.base': 'Sotuvchi ismi matn bo\'lishi kerak',
      'string.empty': 'Sotuvchi ismi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Sotuvchi ismi majburiy maydon'
    }),

  sellerLastName: Joi.string()
    .required()
    .messages({
      'string.base': 'Sotuvchi familiyasi matn bo\'lishi kerak',
      'string.empty': 'Sotuvchi familiyasi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Sotuvchi familiyasi majburiy maydon'
    }),

  sellerPhone: Joi.string()
    .required()
    .pattern(/^\+998\d{9}$/)
    .messages({
      'string.base': 'Telefon raqami matn bo\'lishi kerak',
      'string.empty': 'Telefon raqami bo\'sh bo\'lmasligi kerak',
      'string.pattern.base': 'Telefon raqami +998XXXXXXXXX formatida bo\'lishi kerak',
      'any.required': 'Telefon raqami majburiy maydon'
    }),

  count: Joi.number()
    .required()
    .integer()
    .min(0)
    .messages({
      'number.base': 'Mahsulot miqdori raqam bo\'lishi kerak',
      'number.integer': 'Mahsulot miqdori butun son bo\'lishi kerak',
      'number.min': 'Mahsulot miqdori 0 dan kichik bo\'lmasligi kerak',
      'any.required': 'Mahsulot miqdori majburiy maydon'
    })
}); // ----postProduct Validation Schema

exports.updateProductValidationSchema =
  exports.postProductValidationSchema.fork(
    Object.keys(exports.postProductValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateProduct Validation Schema