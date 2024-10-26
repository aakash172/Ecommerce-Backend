const orderModel = require("../../models/orderProductModel");

const orderController = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const orderList = await orderModel.find({ userId: currentUserId });
    res.json({
      data: orderList,
      error: false,
      success: true,
      message: "ok",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
};
module.exports = orderController;
