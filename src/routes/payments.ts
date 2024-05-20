import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { Injector } from "../lib/injector";
import { PaymentServices } from "../services/payments";

console.log("paymentsRoute");
const router = express.Router();

const paymentServices: PaymentServices = Injector.get("paymentServices");

router.post(
  "/createOrder",
  asyncHandler(async (req, res) => {
    const user = await paymentServices.createOrder(req.body);
    res.send(user);
  })
);

module.exports = router;
