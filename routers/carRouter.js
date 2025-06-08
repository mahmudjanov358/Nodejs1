const { Router } = require("express"); // ----------Express Router----------
const car = Router(); // ----------Car Router Instance----------

const {
  postCar,
  getCar,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/car.controller"); // ----------Car Controller Functions----------

// ----------Paths----------
car.post("/postCar", postCar);
car.get("/getCar", getCar);
car.get("/getCarById/:id", getCarById);
car.put("/updateCar/:id", updateCar);
car.delete("/deleteCar/:id", deleteCar);

// ----------Exporting Car Router----------
module.exports = { car };
