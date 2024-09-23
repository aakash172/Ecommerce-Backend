const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

async function userSignUpController(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("User Already Exits");
    }

    if (!name) {
      throw new Error("Please Enter the name :) ");
    }
    if (!email) {
      throw new Error("Please Enter the email :) ");
    }
    if (!password) {
      throw new Error("Please Enter the password :) ");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    if (!hashPassword) {
      throw new error("Something is Wrong");
    }
    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };
    const userData = new userModel(payload);
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User Created Succesfully",
    });
  } catch (err) {
    console.log("Error : ", err.message);
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
