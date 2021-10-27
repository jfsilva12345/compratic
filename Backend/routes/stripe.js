const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Ji4FLHwlN3zfruCOu9BQY0fFIGSKebjPSFfUN1Fy6H8rzX9Y2Ngbb7ef52SjFpp6ND29F5dGNcA5F96uzoDykzp00530FOasP");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
