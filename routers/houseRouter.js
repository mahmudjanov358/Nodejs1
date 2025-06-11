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

// ----------Paths----------
house.post("/postHouse", postHouse);
house.get("/getHouse", getHouse);
house.get("/getHouseById/:id", getHouseById);
house.put("/updateHouse/:id", updateHouse);
house.delete("/deleteHouse/:id", deleteHouse);

// ----------Exporting House Router----------
module.exports = { house };
