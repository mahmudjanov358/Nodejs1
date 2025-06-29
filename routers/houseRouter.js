const { Router } = require("express"); // ----Express Router
const house = Router(); // ----House Router Instance

const {
  postHouse,
  getHouse,
  getHouseById,
  updateHouse,
  deleteHouse,
} = require("../controllers/house.controller"); // ----House Controller Functions
const { House } = require("../models/houseSchema");

const {
  postHouseValidationSchema,
  updateHouseValidationSchema,
} = require("../validations/houseValidation"); // ----House Validations Functions
const houseValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
}; // ----Function for Validation

// ----postHouse
/**
 * @swagger
 * /house/postHouse:
 *   post:
 *     summary: Yangi House qo'shish
 *     tags: [House]
 *     description: House ro'yxatdan o'tkazilmoqda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               region:
 *                 type: string
 *                 description: House nomini kiriting
 *               city:
 *                 type: string
 *                 description: City nomini kiriting
 *               house_number:
 *                 type: string
 *                 description: House_number sonini kiriting
 *               street:
 *                 type: string
 *                 description: Street nomini kiriting
 *               family_members:
 *                 type: string
 *                 description: Family_members kiriting
 *               location:
 *                 type: string
 *                 description: Location nomini kiriting
 *     responses:
 *       '200':
 *         description: House created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Internal Server Error
 */
house.post("/postHouse", houseValidation(postHouseValidationSchema), postHouse);

// ----getHouse
/**
 * @swagger
 * /house/getHouse:
 *   get:
 *     summary: Barcha Houselarni olish
 *     tags: [House]
 *     description: Barcha Houselarni ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Houselar List
 *       '500':
 *         description: Internal Server Error
 */
house.get("/getHouse", getHouse);

// ----getHouseById
/**
 * @swagger
 * /house/getHouseById/{id}:
 *   get:
 *     summary: Houseni ID bo'yicha olish
 *     tags: [House]
 *     description: Houseni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Houseni ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: House found
 *       '404':
 *         description: House not found
 *       '500':
 *         description: Internal Server Error
*/
house.get("/getHouseById/:id", getHouseById);

// ----updateHouse
/**
 * @swagger
 * /house/updateHouse/{id}:
 *   put:
 *     summary: Houseni yangilash
 *     tags: [House]
 *     description: Houseni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Houseni ID orqali yangilash
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
 *               region:
 *                 type: string
 *                 description: House nomini kiriting
 *               city:
 *                 type: string
 *                 description: City nomini kiriting
 *               house_number:
 *                 type: string
 *                 description: House_number sonini kiriting
 *               street:
 *                 type: string
 *                 description: Street nomini kiriting
 *               family_members:
 *                 type: string
 *                 description: Family_members kiriting
 *               location:
 *                 type: string
 *                 description: Location nomini kiriting
 *     responses:
 *       '200':
 *         description: House updated successfully
 *       '404':
 *         description: House not found
 *       '500':
 *         description: Internal Server Error
 */
house.put(
  "/updateHouse/:id",
  houseValidation(updateHouseValidationSchema),
  updateHouse
);

// ----deleteHouse
/**
 * @swagger
 * /house/deleteHouse/{id}:
 *   delete:
 *     summary: Houseni o'chirish
 *     tags: [House]
 *     description: Houseni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the House to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: House deleted successfully
 *       '404':
 *         description: House not found
 *       '500':
 *         description: Internal Server Error
 */
house.delete("/deleteHouse/:id", deleteHouse);

module.exports = { house }; // ----Exporting House Router
