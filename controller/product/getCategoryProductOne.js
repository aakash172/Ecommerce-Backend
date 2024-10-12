const productModel = require("../../models/productModel");

async function getCategoryProductOne(req, res) {
  try {
    const productCategory = await productModel.distinct("category");

    const productByCategory = [];

    for (const category of productCategory) {
      const product = await productModel.findOne({ category: category });

      if (product) {
        productByCategory.push(product);
      }
    }

    res.status(200).json({
      msg: "AKASH",
      data: productByCategory,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = getCategoryProductOne;
