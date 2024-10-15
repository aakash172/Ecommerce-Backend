const addToCartModel = require("../../models/cartProducts");

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;
    const isProductAvailable = await addToCartModel.findOne({ productId });
    if (isProductAvailable) {
      return res.json({
        message: "Product Already in the card",
        error: true,
        success: false,
      });
    }
    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };
    const newToCart = new addToCartModel(payload);
    const saveProduct = await newToCart.save();
    res.status(200).json({
      message: "Product Add to cart",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
