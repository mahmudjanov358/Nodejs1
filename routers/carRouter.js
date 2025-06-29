const { Router } = require("express"); // ----Express Router
const car = Router(); // ----Car Router Instance

const {
  postCar,
  getCar,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/car.controller"); // ----Car Controller Functions

const {
  postCarValidationSchema,
  updateCarValidationSchema,
} = require("../validations/carValidation"); // ----Car Validations Functions
const carValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  } else {
    next();
  }
}; // ----Function for Validation

// ----postCar
/**
 * @swagger
 * /car/postCar:
 *   post:
 *     summary: Yangi Car qo'shish
 *     tags: [Car]
 *     description: Car ro'yxatdan o'tkazilmoqda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Avtomobil nomini kiriting
 *               model:
 *                 type: string
 *                 description: Avtomobil Modelini kiriting
 *               description:
 *                 type: string
 *                 description: Avtomobil Description kiriting
 *               color:
 *                 type: string
 *                 description: Avtomobil Rangini kiriting
 *               horsePower:
 *                 type: string
 *                 description: Avtomobil Ot kuchini kiriting
 *               carType:
 *                 type: string
 *                 description: Avtomobil Turini kiriting
 *               charging:
 *                 type: string
 *                 description: Avtomobil Quvvatlashini kiriting
 *               weight:
 *                 type: string
 *                 description: Avtomobil Vaznini ko'rsatish
 *               gasoline:
 *                 type: string
 *                 description: Avtomobil Benzinini kiriting
 *               yearMachine:
 *                 type: string
 *                 description: Avtomobil  Yilini kiriting
 *               price:
 *                 type: string
 *                 description: Avtomobil Pulini kiriting
 *     responses:
 *       '200':
 *         description: Car created successfully
 *       '404':
 *         description: This name has been banned
 *       '500':
 *         description: Internal Server Error
 */
car.post("/postCar", carValidation(postCarValidationSchema), postCar);

// ----getCar
/**
 * @swagger
 * /car/getCar:
 *   get:
 *     summary: Barcha Carlarni olish
 *     tags: [Car]
 *     description: Barcha Carlar ro'yhatini olish
 *     responses:
 *       '200':
 *         description: Carlar List
 *       '500':
 *         description: Internal Server Error
 */
car.get("/getCar", getCar);

// ----getCarById
/**
 * @swagger
 * /car/getCarById/{id}:
 *   get:
 *     summary: Avtomobilni ID bo'yicha olish
 *     tags: [Car]
 *     description: Avtomobilni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Avtomobilni ID bo'yicha olish
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Car found
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal Server Error
*/
car.get("/getCarById/:id", getCarById);

// ----updateCar
/**
 * @swagger
 * /car/updateCar/{id}:
 *   patch:
 *     summary: Avtomobilni yangilash
 *     tags: [Car]
 *     description: Avtomobilni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Avtomobilni ID orqali yangilash
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
 *               title:
 *                 type: string
 *                 description: Yangi Title
 *               model:
 *                 type: string
 *                 description: Yangi Model
 *               description:
 *                 type: string
 *                 description: Yangi Description
 *               color:
 *                 type: string
 *                 description: Yangi Color
 *               horsePower:
 *                 type: number
 *                 description: Yangi HorsePower
 *               carType:
 *                 type: string
 *                 description: Yangi CarType
 *               charging:
 *                 type: string
 *                 description: Yangi Charging
 *               weight:
 *                 type: string
 *                 description: Yangi Weight
 *               gasoline:
 *                 type: string
 *                 description: Yangi Gasoline
 *               yearMachine:
 *                 type: string
 *                 description: Yangi YearMachine
 *               price:
 *                 type: string
 *                 description: Yangi Price
 *     responses:
 *       '200':
 *         description: Car updated successfully
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal Server Error
 */
car.patch(
  "/updateCar/:id",
  carValidation(updateCarValidationSchema),
  updateCar
);

// ----deleteCar
/**
 * @swagger
 * /car/deleteCar/{id}:
 *   delete:
 *     summary: Avtomobilni o'chirish
 *     tags: [Car]
 *     description: Avtomobilni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Car to Delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Car deleted successfully
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal Server Error
 */
car.delete("/deleteCar/:id", deleteCar);

module.exports = { car }; // ----Exporting Car Router
