// ----------House Controller----------
const { House } = require("../models/houseSchema");

// ----------postHouse----------
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

// ----------getHouse----------
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

// ----------getHouseById----------
exports.getHouseById = async (req, res) => {
  try {
    const houseId = req.params.id;
    const house = await House.findById(houseId);

    if (!house) {
      return res.status(404).json({
        success: false,
        message: "House not found!",
        house: house,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "House found successfully!",
        house: house,
      });
    }
  } catch (error) {
    console.error("Error House By Id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

// ----------updateHouse----------
exports.updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { region, city, house_number, street, family_members, location } =
      req.body;

    const updatedHouse = await House.findByIdAndUpdate(
      id,
      {
        region,
        city,
        house_number,
        street,
        family_members,
        location,
      },
      { new: true }
    );

    if (!updatedHouse) {
      return res.status(404).json({
        success: false,
        message: "House not found!",
        house: house,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "House updated successfully!",
        house: updatedHouse,
      });
    }
  } catch (error) {
    console.error("Error — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server Error!",
    });
  }
};

// ----------deleteHouse----------
exports.deleteHouse = async (req, res) => {
  try {
    const houseId = req.params.id;
    const house = await House.findByIdAndDelete(houseId);

    if (!house) {
      return res.status(404).json({
        success: false,
        message: "House not found!",
        house: house,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "House delete successfully!",
        house: house,
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
