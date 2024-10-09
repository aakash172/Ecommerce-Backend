const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function uploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;
    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission Denied");
    }
    const uploadProduct = new productModel(req.body);
    const saveProduct = uploadProduct.save();
    res.status(200).json({
      message: "Product Saved Successfully",
      success: true,
      error: false,
      data: saveProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = uploadProductController;
