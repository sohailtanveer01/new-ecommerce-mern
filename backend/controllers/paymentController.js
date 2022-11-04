require("dotenv").config();


const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const key = "sk_test_51LsUcmSFOJuxojaiebwJDXaPFXUUZQNU5VVRfAa0UaYd7cjWuRDkZpaG9Nbsl4bh8NsQfeYeZxd15Ea6OuYbP5E800GiRNyAMW"

const stripe = require("stripe")
const Stripe = stripe(key)
// console.log(process.env.STRIPE_API_KEY)

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await Stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

// exports.sendStripeSecretKey = catchAsyncErrors(async (req, res, next) => {
//   res.status(200).json({ stripeApiKey: process.env.STRIPE_SECRET_KEY });
// });