// ----------Car
const { Car } = require("../models/carSchema");

// ----------postCar
const postCar = async (req, res) => {
  try {
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;
    const existingCar = await Car.findOne({ title });
    console.log(`Existing Car: ${existingCar}`);

    if (!existingCar) {
      return res.status(400).json({
        success: false,
        message: "Bu car ro'yxatingizda mavjud!",
        car: null,
      });
    } else {
      const newCar = new Car({
        title,
        model,
        description,
        color,
        horsePower,
        carType,
        charging,
        weight,
        gasoline,
        yearMachine,
        price,
      });
      await newCar.save();

      return res.status(201).json({
        success: true,
        message: "Car muvaffaqiyatli ro'yxatga kiritildi!",
        car: newCar,
      });
    }
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  postCar,
};
