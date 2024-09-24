let jwt = require("jsonwebtoken");
async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(200).json({
        message: "User not login",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log("Err :", err);
      console.log("Decoded :", decoded);

      if (err) {
        console.log("Error in Auth : ", err);
        req.userId = decoded?._id;
      }
      next();
    });
    console.log("token :", token);
  } catch (err) {
    res.status(400).json({
      success: false,
      data: [],
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = authToken;
