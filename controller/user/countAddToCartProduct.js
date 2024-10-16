const addToCartModel = require("../../models/cartProducts");

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const count = await addToCartModel.countDocuments({
      userId: userId,
    });
    res.status(200).json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
};
module.exports = countAddToCartProduct;
