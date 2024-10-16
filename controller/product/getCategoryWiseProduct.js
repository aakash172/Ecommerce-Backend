const productModel = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req?.body || req.query;
    const product = await productModel.find({ category });
    res.status(200).json({
      success: true,
      error: false,
      message: "Product",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message,
    });
  }
};

module.exports = getCategoryWiseProduct;
