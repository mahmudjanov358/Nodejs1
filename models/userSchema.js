// ----------Importing Mongoose----------
const { Schema, model } = require("mongoose");

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
});

// ----------Exporting the User Model----------
const User = model("User", userSchema);
module.exports = { User };
