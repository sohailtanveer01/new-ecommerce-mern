const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
  sendStripeSecretKey
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
// router.route("/stripesecretkey").get(isAuthenticatedUser, sendStripeSecretKey);

module.exports = router;