const { Router } = require("express"); // ----------Express Router----------
const house = Router(); // ----------House Router Instance----------

const {
  postHouse,
  getHouse,
  getHouseById,
  updateHouse,
  deleteHouse,
} = require("../controllers/house.controller"); // ----------House Controller Functions----------
const { House } = require("../models/houseSchema");

const {
  postHouseValidationSchema,
  updateHouseValidationSchema,
} = require("../validations/houseValidation"); //----------House Validations Functions----------

const houseValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

// ----------Paths----------
house.post("/postHouse", houseValidation(postHouseValidationSchema), postHouse);
house.get("/getHouse", getHouse);
house.get("/getHouseById/:id", getHouseById);
house.put(
  "/updateHouse/:id",
  houseValidation(updateHouseValidationSchema),
  updateHouse
);
house.delete("/deleteHouse/:id", deleteHouse);

// ----------Exporting House Router----------
module.exports = { house };
