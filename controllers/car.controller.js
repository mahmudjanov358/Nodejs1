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

    if (existingCar) {
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

// ----------getCar
const getCar = async (req, res) => {
  try {
    const car = await Car.find();
    return res.status(200).json({
      success: true,
      message: "Cars fetched successfully!",
      cars: car,
    });
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------getCarById
const getCarById = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
        car: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Car found successfully!",
        car: car,
      });
    }
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------updateCar
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
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
      price,
    } = req.body;

    const updatedCar = await Car.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
        car: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Car updated successfully!",
        car: updatedCar,
      });
    }
  } catch (error) {
    console.error("Error updating car:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------deleteCar
const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findByIdAndDelete(carId);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
        car: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Car deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleteing car:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------Export
module.exports = {
  postCar,
  getCar,
  getCarById,
  updateCar,
  deleteCar,
};
