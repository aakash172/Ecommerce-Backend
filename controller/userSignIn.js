const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  
    if (checkPassword) {
      const tokenData = {
        _id: userData._id,
        email: userData.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      const tokenOption = {
        httpOnly: true,
        secure: false,
      };
     
      res.cookie("token", token, tokenOption).json({
        message: "Login Successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please Check Password");
    }
  } catch (err) {
    res.status(401).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
