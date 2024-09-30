async function allUsers(req, res) {
  try {
    res.json({
      message: "all User",
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = allUsers;
