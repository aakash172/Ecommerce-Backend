const userModel = require("../../models/userModel");

async function allUsers(req, res) {
  try {
    const dataResponse = await userModel.find();
    res.json({
      message: "all User",
      data: dataResponse,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = allUsers;
