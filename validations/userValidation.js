const Joi = require("joi"); // ----Joi library

exports.postUserValidationSchema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .min(3)
    .max(30)
    .messages({
      'string.base': 'Foydalanuvchi nomi matn bo\'lishi kerak',
      'string.empty': 'Foydalanuvchi nomi bo\'sh bo\'lmasligi kerak',
      'string.min': 'Foydalanuvchi nomi kamida 3 ta belgi bo\'lishi kerak',
      'string.max': 'Foydalanuvchi nomi 30 ta belgidan oshmasligi kerak',
      'any.required': 'Foydalanuvchi nomi majburiy maydon'
    }),

  password: Joi.string()
    .required()
    .min(8)
    .max(30)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/)
    .messages({
      'string.base': 'Parol matn bo\'lishi kerak',
      'string.empty': 'Parol bo\'sh bo\'lmasligi kerak',
      'string.min': 'Parol kamida 8 ta belgi bo\'lishi kerak',
      'string.max': 'Parol 30 ta belgidan oshmasligi kerak',
      'string.pattern.base': 'Parol kamida 1 ta harf, 1 ta raqam va 1 ta maxsus belgi bo\'lishi kerak',
      'any.required': 'Parol majburiy maydon'
    }),

  firstName: Joi.string()
    .messages({
      'string.base': 'Ism matn bo\'lishi kerak'
    }),

  lastName: Joi.string()
    .messages({
      'string.base': 'Familiya matn bo\'lishi kerak'
    }),

  birthday: Joi.string()
    .optional()
    .messages({
      'string.base': 'Tug\'ilgan sana matn bo\'lishi kerak'
    }),

  gender: Joi.string()
    .optional()
    .valid('male', 'famale')
    .messages({
      'string.base': 'Jins matn bo\'lishi kerak',
      'any.only': 'Jins "erkak" yoki "ayol" bo\'lishi kerak'
    }),

  address: Joi.string()
    .messages({
      'string.base': 'Manzil matn bo\'lishi kerak'
    }),

  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .messages({
      'string.base': 'Telefon raqami matn bo\'lishi kerak',
      'string.pattern.base': 'Telefon raqami +998XXXXXXXXX formatida bo\'lishi kerak'
    }),

  car_id: Joi.string()
    .messages({
      'string.base': 'Avtomobil ID si matn bo\'lishi kerak'
    }),

  product_id: Joi.string()
    .messages({
      'string.base': 'Mahsulot ID si matn bo\'lishi kerak'
    }),

  house_id: Joi.string()
    .messages({
      'string.base': 'Uy ID si matn bo\'lishi kerak'
    }),

  book_id: Joi.string()
    .messages({
      'string.base': 'Kitob ID si matn bo\'lishi kerak'
    })
}); // ----postUser Validation Schema

exports.updateUservalidationSchema = exports.postUserValidationSchema.fork(
  Object.keys(exports.postUserValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateUser Validation Schema