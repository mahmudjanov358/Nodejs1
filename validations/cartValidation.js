const Joi = require("joi"); // ----Joi Library

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.string()
    .optional()
    .messages({
      'string.base': 'Foydalanuvchi ID si matn bo\'lishi kerak',
      'string.empty': 'Foydalanuvchi ID si bo\'sh bo\'lmasligi kerak'
    }),

  car_id: Joi.string()
    .optional()
    .messages({
      'string.base': 'Avtomobil ID si matn bo\'lishi kerak',
      'string.empty': 'Avtomobil ID si bo\'sh bo\'lmasligi kerak'
    }),

  product_id: Joi.string()
    .optional()
    .messages({
      'string.base': 'Mahsulot ID si matn bo\'lishi kerak',
      'string.empty': 'Mahsulot ID si bo\'sh bo\'lmasligi kerak'
    }),

  house_id: Joi.string()
    .optional()
    .messages({
      'string.base': 'Uy ID si matn bo\'lishi kerak',
      'string.empty': 'Uy ID si bo\'sh bo\'lmasligi kerak'
    }),

  book_id: Joi.string()
    .optional()
    .messages({
      'string.base': 'Kitob ID si matn bo\'lishi kerak',
      'string.empty': 'Kitob ID si bo\'sh bo\'lmasligi kerak'
    })
})
  // Kamida bitta ID majburiy bo'lishi uchun custom validation
  .or('car_id', 'product_id', 'house_id', 'book_id')
  .messages({
    'object.missing': 'Kamida bitta element ID si (car_id, product_id, house_id, book_id) bo\'lishi kerak'
  }); //----postCart Validation Function

