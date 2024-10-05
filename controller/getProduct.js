const productModel = require("../models/productModel.js");

async function getProductController(req, res) {
  try {
    const allProduct = await productModel.find().sort({ createdAt: -1 });
    res.json({
      message: "All product",
      success: false,
      error: true,
      data: allProduct,
    });
  } catch (err) {
    res.json({
      success: false,
      error: true,
      message: err.message,
    });
  }
}
module.exports = getProductController;
