const { House } = require("../models/houseSchema");

// ----------postHouse
exports.postHouse = async (req, res) => {
  try {
    const { region, city, house_number, street, family_members, location } =
      req.body;
    const newHouse = new House({
      region,
      city,
      house_number,
      street,
      family_members,
      location,
    });
    await newHouse.save();

    return res.status(201).json({
      success: true,
      message: "House created successfully!",
      data: newHouse,
    });
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------getHouse
exports.getHouse = async (req, res) => {
  try {
    const houses = await House.find({});
    return res.status(200).json({
      success: true,
      message: "Houses List",
      houses: houses,
    });
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------getHouseById
exports.getHouseById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error House By Id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
