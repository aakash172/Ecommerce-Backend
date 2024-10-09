const userModel = require("../../models/userModel");

async function updateUser(req, res) {
  try {
    const { userId, name, email, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };
    const updateUser = await userModel.findByIdAndUpdate(userId, payload);
    res.json({
      data: updateUser,
      message: "User Update",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(503).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateUser;
