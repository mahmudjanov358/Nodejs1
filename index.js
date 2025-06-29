const express = require("express"); // ----Express Library
const { connect } = require("mongoose"); // ----Mongoose Library
const cors = require("cors"); // ----CORS Library
require("dotenv").config(); // ----Environment Variables Library
const swaggerJsdoc = require('swagger-jsdoc') // ----Swagger-jsdoc Library
const swaggerUi = require('swagger-ui-express') // ----Swagger-ui-express Library

const app = express(); // ----App Instance

// ----Middleware
app.use(express.json());
app.use(cors());

// ----Database connecToDB
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("MongoDB connected failed:", error.message);
  }
}
connectToDB();

// ----SwaggerOptions
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:1000",
      },
    ],
    tags: [
      {
        name: "User",
        description: "Foydalanuvchilarni boshqarish uchun API User",
      },
      {
        name: "Car",
        description: "Foydalanuvchilarni boshqarish uchun API Car",
      },
      {
        name: "Product",
        description: "Foydalanuvchilarni boshqarish uchun API Product",
      },
      {
        name: "House",
        description: "Foydalanuvchilarni boshqarish uchun API House",
      },
      {
        name: "Book",
        description: "Foydalanuvchilarni boshqarish uchun API Book",
      },
      {
        name: "Cart",
        description: "Foydalanuvchilarni boshqarish uchun API Cart",
      },
    ]
  },
  apis: ["./routers/*.js"]
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----Routers
const { user } = require("./routers/userRouter"); // ----User Router
app.use("/user", user);
const { car } = require("./routers/carRouter"); // ----Car Router
app.use("/car", car);
const { product } = require("./routers/productRouter"); // ----Product Router
app.use("/product", product);
const { house } = require("./routers/houseRouter"); // ----House Router
app.use("/house", house);
const { book } = require("./routers/bookRouter"); // ----Book Router
app.use("/book", book);
const { cart } = require("./routers/cartRouter"); // ----Cart Router
app.use("/cart", cart);

// ----Server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
