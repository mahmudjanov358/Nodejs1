const express = require("express"); // ----------Express----------
const { connect } = require("mongoose"); // ----------Mongoose----------
const cors = require("cors"); // ----------CORS----------
require("dotenv").config(); // ----------Environment Variables----------

const app = express(); // ----------App Instance----------

// ----------Middleware----------
app.use(express.json());
app.use(cors());

// ----------Database connecToDB----------
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connected failed:", error.message);
  }
}
connectToDB();

// ----------Routers----------
const { user } = require("./routers/userRouter"); // ----------User Router----------
app.use("/user", user);
const { car } = require("./routers/carRouter"); // ----------Car Router----------
app.use("/car", car);
const { product } = require("./routers/productRouter"); // ----------Product Router----------
app.use("/product", product);
const { house } = require("./routers/houseRouter"); // ----------House Router----------
app.use("/house", house);

// ----------Server----------
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
