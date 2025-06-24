const { Router } = require("express"); // ----Express Router
const user = Router(); // ----User Router Instance

const {
  postUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/user.controller"); // ----User Controller Functions

const {
  postUserValidationSchema,
  updateUservalidationSchema,
} = require("../validations/userValidation"); // ----User Validations Functions

const userValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
}; // ----Function for Validation

// ----Paths
user.post("/postUser", userValidation(postUserValidationSchema), postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.put(
  "/updateUser/:id",
  userValidation(updateUservalidationSchema),
  updateUser
);
user.delete("/deleteUser/:id", deleteUser);
user.post("/loginUser", loginUser);

// ----User Swaggers
/**
 * @swagger
 * /user/postUser:
 *   post:
 *     summary: Yangi foydalanuvchi qo'shish
 *     tags: [User]
 *     description: Foydalanuvchini ro'yxatdan o'tkazilmoqda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username takroriy bo'lmasligi kerak
 *               password:
 *                 type: string
 *                 description: Username paroli
 *               firstName:
 *                 type: string
 *                 description: Foydalanuvchining ismi
 *               lastName:
 *                 type: string
 *                 description: Foydalanuvchining familiyasi
 *               birthday:
 *                 type: string
 *                 description: Foydalanuvchining tavvallud kuni (DD-MM-YYYY Formatda)
 *               gender:
 *                 type: string
 *                 description: Foydalanuvchining jinsi
 *               address:
 *                 type: string
 *                 description: Foydalanuvchining manzili
 *               phone:
 *                 type: string
 *                 description: Foydalanuvchining telefon raqami
 *               car_id:
 *                 type: string
 *                 description: Foydalanuvchining avtomobili uchun ma'lumot (ObjectId)
 *               product_id:
 *                 type: string
 *                 description: Foydalanuvchining mahsuloti uchun ma'lumot (ObjectId)
 *               house_id:
 *                 type: string
 *                 description: Foydalanuvchining uyi uchun ma'lumot (ObjectId)
 *               book_id:
 *                 type: string
 *                 description: Foydalanuvchining kitobi uchun ma'lumot (ObjectId)
 *     responses:
 *       '201':
 *         description: Muvaffaqiyatli o'tish
 *       '404':
 *         description: Xatolik — Xatolarga yo'l qo'ydingiz
 *       '500':
 *         description: Ichki Server Xatosi
 */

module.exports = { user }; // ----Exporting User Router
