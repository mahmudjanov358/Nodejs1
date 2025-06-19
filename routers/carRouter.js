const { Router } = require("express"); // ----------Express Router----------
const car = Router(); // ----------Car Router Instance----------

const {
  postCar,
  getCar,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/car.controller"); // ----------Car Controller Functions----------

const {
  postCarValidationSchema,
  updateCarValidationSchema,
} = require("../validations/carValidation"); //----------Car Validations Functions----------

const carValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

// ----------Paths----------
car.post("/postCar", carValidation(postCarValidationSchema), postCar);
car.get("/getCar", getCar);
car.get("/getCarById/:id", getCarById);
car.patch(
  "/updateCar/:id",
  carValidation(updateCarValidationSchema),
  updateCar
);
car.delete("/deleteCar/:id", deleteCar);

// ----------Exporting Car Router----------
module.exports = { car };
