const productModel = require("../../models/productModel");

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;
    const data = await productModel.findById(productId);

    res.json({
      data: data,
      success: true,
      error: false,
      message: "Data",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
};

module.exports = getProductDetails;
