async function userLogout(req, res) {
  try {
    res.clearCookie("token").json({
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
