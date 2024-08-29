import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
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
    console.log(options);
    return this.paymentGateway.orders.create(options);
  }

  public async verifyPayment(data) {
    try {
      const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = data;
      const secret = this.paymentGateway.key_secret;
      const body = `${razorpayOrderId}|${razorpayPaymentId}`;

      const isValidSignature = validateWebhookSignature(
        body,
        razorpaySignature,
        secret
      );
      if (isValidSignature) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
