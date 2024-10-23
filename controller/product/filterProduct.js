const productModel = require("../../models/productModel");

const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];

    const product = await productModel.find({
      category: {
        $in: categoryList,
      },
    });

    res.status(200).json({
      success: true,
      error: false,
      message: "ok",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
};

module.exports = filterProductController;
