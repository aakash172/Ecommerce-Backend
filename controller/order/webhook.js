const stripe = require("../../config/stripe.js");
const orderModel = require("../../models/orderProductModel.js");
const endpointsecret = process.env.STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY;

async function getLineItems(lineItems) {
  let productItems = [];

  if (lineItems?.data?.length) {
    for (const item of lineItems.data) {
      const product = await stripe.products.retrieve(item.price.product);
      const productId = product.metadata.productId;
      const productData = {
        productId: productId,
        name: product.name,
        price: product.price.unit_amount / 100,
        quantity: item.quantity,
        image: product.images,
      };
      productItems.push(productData);
    }
  }
  return productItems;
}

const webhooks = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const payloadString = JSON.stringify(req.body);
  const header = stripe.webhooks.generateTestHeaderString({
    payload: payloadString,
    secret: endpointsecret,
  });
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, header, endpointsecret);
  } catch (err) {
    res.status(400).send(`WebHook Error:${err.message}`);
  }
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );
      const productDetails = await getLineItems(lineItems);
      const orderDetails = {
        productDetails: productDetails,
        email: session.customer_email,
        userId: session.metadata.userId,
        paymentDetails: {
          paymentId: session.payment_intent,
          payment_method_type: session.payment_method_types,
          payment_status: session.payment_status,
        },
        shipping_options: session.shipping_options.map((s) => {
          return { ...s, shipping_amount: s.shipping_amount / 100 };
        }),
        totalAmout: session.amount_total / 100,
      };
      const order = new orderModel(orderDetails);
      const saveOrder = order.save();
      break;
    default:
      console.log(`Unhandled Event Type ${event.type}`);
  }
  res.status(200).send();
};

module.exports = webhooks;
