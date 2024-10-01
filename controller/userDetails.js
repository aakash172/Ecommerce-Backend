const userModel = require("../models/userModel");

async function userDetailsController(req, res) {
  try {
    const user = await userModel.findById(req.userId);
    res.status(200).json({
      data: user,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = userDetailsController;
