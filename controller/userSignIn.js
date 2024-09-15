const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please provide Email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    const userData = await userModel.findOne({ email });
    if (!userData) {
      throw new Error("User not registered");
    }
    const checkPassword = await bcrypt.compareSync(password, userData.password);
    console.log("password", checkPassword);
    res.status(200).json({
      success: true,
      ak: "okkk",
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
}

module.exports = userSignInController;
