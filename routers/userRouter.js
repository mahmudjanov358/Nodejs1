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

user.post("/loginUser", loginUser);

// ----postUser
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
 *         description: User created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Tashqi Server Xatosi
 */
user.post("/postUser", userValidation(postUserValidationSchema), postUser);

// ----getUser
/**
 * @swagger
 * /user/getUser:
 *   get:
 *     summary: Barcha Userlarni olish
 *     tags: [User]
 *     description: Barcha Userlarni ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Userlar List
 *       '500':
 *         description: Internal Server Error
 */
user.get("/getUser", getUser);

// ----getUserById
/**
 * @swagger
 * /user/getUserById/{id}:
 *   get:
 *     summary: Foydalanuvchini ID bo'yicha olish
 *     tags: [User]
 *     description: ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Foydalanuvchini ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User found
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal Server Error
 */
user.get("/getUserById/:id", getUserById);

// ----updateUser
/**
 * @swagger
 * /user/updateUser/{id}:
 *   patch:
 *     summary: Userni yangilash
 *     tags: [User]
 *     description: Userni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ni olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Yangi Username
 *               password:
 *                 type: string
 *                 description: Yangi Password
 *               firstName:
 *                 type: string
 *                 description: Yangi FirstName
 *               lastName:
 *                 type: string
 *                 description: Yangi LastName
 *               birthday:
 *                 type: string
 *                 description: Yangi Birthday
 *               gender:
 *                 type: string
 *                 description: Yangi Jins
 *               address:
 *                 type: string
 *                 description: Yangi Address
 *               phone:
 *                 type: string
 *                 description: Yangi Phone
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal Server Error
 */
user.patch(
  "/updateUser/:id",
  userValidation(updateUservalidationSchema),
  updateUser
);

// ----deleteUser
/**
 * @swagger
 * /user/deleteUser/{id}:
 *   delete:
 *     summary: Delete a user By ID
 *     tags: [User]
 *     description: Userni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the User to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal Server Error
  */
user.delete("/deleteUser/:id", deleteUser);

module.exports = { user }; // ----Exporting User Router
