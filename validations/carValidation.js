const Joi = require("joi"); //----Joi Library

exports.postCarValidationSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(1)
    .messages({
      'string.base': 'Avtomobil nomi matn bo\'lishi kerak',
      'string.empty': 'Avtomobil nomi bo\'sh bo\'lmasligi kerak',
      'string.min': 'Avtomobil nomi kamida 1 ta belgi bo\'lishi kerak',
      'any.required': 'Avtomobil nomi majburiy maydon'
    }),

  model: Joi.string()
    .required()
    .messages({
      'string.base': 'Model nomi matn bo\'lishi kerak',
      'string.empty': 'Model nomi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Model nomi majburiy maydon'
    }),

  description: Joi.string()
    .optional()
    .messages({
      'string.base': 'Tavsif matn bo\'lishi kerak'
    }),

  color: Joi.string()
    .required()
    .messages({
      'string.base': 'Rang nomi matn bo\'lishi kerak',
      'string.empty': 'Rang nomi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Rang majburiy maydon'
    }),

  horsePower: Joi.number()
    .required()
    .positive()
    .messages({
      'number.base': 'Ot kuchi raqam bo\'lishi kerak',
      'number.positive': 'Ot kuchi musbat raqam bo\'lishi kerak',
      'any.required': 'Ot kuchi majburiy maydon'
    }),

  carType: Joi.string()
    .required()
    .messages({
      'string.base': 'Avtomobil turi matn bo\'lishi kerak',
      'string.empty': 'Avtomobil turi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Avtomobil turi majburiy maydon'
    }),

  charging: Joi.string()
    .optional()
    .messages({
      'string.base': 'Quvvatlash turi matn bo\'lishi kerak'
    }),

  weight: Joi.string()
    .required()
    .messages({
      'string.base': 'Og\'irlik matn bo\'lishi kerak',
      'string.empty': 'Og\'irlik bo\'sh bo\'lmasligi kerak',
      'any.required': 'Og\'irlik majburiy maydon'
    }),

  gasoline: Joi.string()
    .required()
    .messages({
      'string.base': 'Yoqilg\'i turi matn bo\'lishi kerak',
      'string.empty': 'Yoqilg\'i turi bo\'sh bo\'lmasligi kerak',
      'any.required': 'Yoqilg\'i turi majburiy maydon'
    }),

  yearMachine: Joi.string()
    .required()
    .messages({
      'string.base': 'Ishlab chiqarilgan yil matn bo\'lishi kerak',
      'string.empty': 'Ishlab chiqarilgan yil bo\'sh bo\'lmasligi kerak',
      'any.required': 'Ishlab chiqarilgan yil majburiy maydon'
    }),

  price: Joi.string()
    .required()
    .messages({
      'string.base': 'Narx matn bo\'lishi kerak',
      'string.empty': 'Narx bo\'sh bo\'lmasligi kerak',
      'any.required': 'Narx majburiy maydon'
    })
}); // ----postCar Validation Schema

exports.updateCarValidationSchema = exports.postCarValidationSchema.fork(
  Object.keys(exports.postCarValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateCar Validation Schema