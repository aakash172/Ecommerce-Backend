async function userLogout(req, res) {
  try {
    const tokenOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.clearCookie("token", tokenOption).json({
      message: "Logout Successfully",
      data: [],
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

module.exports = userLogout;
