import { Log } from "../lib/log";
const crypto = require("crypto");

console.log("PaymentServices");

export class PaymentServices {
  constructor(private paymentGateway) {}

  @Log()
  public async createOrder(data) {
    const amount = data.amount || data.price;
    if (!amount || isNaN(amount))
      throw new Error("Please provide valid amount.");
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    console.log(options)
    return this.paymentGateway.orders.create(options);
  }
}
