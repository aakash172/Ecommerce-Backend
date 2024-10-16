const addToCartModel = require("../../models/cartProducts");

const updateAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const addToCartProductId = req.body._id;
    const qty = req.body.quantity;

    const updateProduct = await addToCartModel.updateOne(
      { _id: addToCartProductId },
      {
        ...(qty && { quantity: qty }),
      }
    );
    res.status(200).json({
      message: "Product updated",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message,
      success: false,
      error: true,
    });
  }
};

module.exports = updateAddToCartProduct;
