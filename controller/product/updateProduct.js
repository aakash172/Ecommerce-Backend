const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function updateProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission Denied");
    }
    const { _id, ...restBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(_id, restBody);
    res.status(200).json({
      success: true,
      error: false,
      message: "product Update Successfully-->",
      data: updateProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = updateProductController;
