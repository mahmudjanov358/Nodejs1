const { Router } = require("express");
const car = Router();

const {
  postCar,
  getCar,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/car.controller");

car.post("/postCar", postCar);
car.get("/getCar", getCar);
car.get("/getCarById/:id", getCarById);
car.put("/updateCar/:id", updateCar);
car.delete("/deleteCar/:id", deleteCar);

module.exports = { car };
