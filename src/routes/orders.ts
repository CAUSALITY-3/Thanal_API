import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { Injector } from "../lib/injector";
import { OrderServices } from "../services/orders";

console.log("userRoute");
const router = express.Router();

const orderServices: OrderServices = Injector.get("orderServices");

router.post(
  "/saveOrder",
  asyncHandler(async (req, res) => {
    const { user, order } = await orderServices.saveOrder(req.body);
    user && res.cookie("user", JSON.stringify(user));
    res.send(order);
  })
);

router.post(
  "/getOrderByIds",
  asyncHandler(async (req, res) => {
    const orders = await orderServices.getOrderByIds(req.body);
    res.send(orders);
  })
);

module.exports = router;
