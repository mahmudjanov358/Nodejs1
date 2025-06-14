// ----------Importing Mongoose(Schema, Model)----------
const { Schema, model } = require("mongoose");
const { Car } = require("./carSchema");
const { Product } = require("./productSchema");
const { House } = require("./houseSchema");

// ----------Defining the User Schema----------
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  birthday: { type: String },
  gender: { type: String, enum: ["male", "female"], alias: "jinsi" },
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
  car_id: { type: Schema.Types.ObjectId, ref: Car },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  house_id: { type: Schema.Types.ObjectId, ref: House },
});

// ----------Exporting the User Model----------
const User = model("User", userSchema);
module.exports = { User };
