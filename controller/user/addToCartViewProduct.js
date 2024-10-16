const addToCartModel = require("../../models/cartProducts.js");

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req?.userId;

    const allProduct = await addToCartModel
      .find({
        userId: currentUser,
      })
      .populate("productId");

    res.status(200).json({
      data: allProduct,
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
};

module.exports = addToCartViewProduct;
