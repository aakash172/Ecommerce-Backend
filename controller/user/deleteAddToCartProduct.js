const addToCardModel = require("../../models/cartProducts.js");

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const addToCartProductId = req.body._id;
    const deleteProduct = await addToCardModel.deleteOne({
      _id: addToCartProductId,
    });
    res.json({
      message: "product deleted from cart",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (err) {
    res.json({
      message: err?.message,
      success: false,
      error: true,
    });
  }
};

module.exports = deleteAddToCartProduct;
