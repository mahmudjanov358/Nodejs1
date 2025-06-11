// ----------Importing Mongoose(Schema, Model)----------
const { Schema, model } = require("mongoose");

// ----------Defining the House Schema----------
const houseSchema = new Schema({
  region: { type: String, required: true },
  city: { type: String, required: true },
  house_number: { type: Number, required: true },
  street: { type: String, required: true },
  family_members: { type: Number, required: true },
  location: { type: String, required: true },
});

// ----------Exporting the House Model----------
const House = model("House", houseSchema);
module.exports = { House };
