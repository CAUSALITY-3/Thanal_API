import { Log } from "../lib/log";
import { set, Types } from "mongoose";
import { ObjectId } from "mongodb";
import { ProductServices } from "./products";
import { UserServices } from "./users";
import { Order as OrderModel } from "../model/orders";

console.log("ProductServices");

export class OrderServices {
  constructor(
    private Order: typeof OrderModel,
    private Products: ProductServices,
    private User: UserServices
  ) {}

  @Log()
  async saveOrder(data) {
    const { totalAmount, quantities, email } = data;
    const products = await this.Products.updateProductsStock(quantities);
    const payload = {
      userEmail: email,
      totalPrice: totalAmount,
      orderItems: [],
      deliveryAddress: data.deliveryAddress,
    };
    for (const product of products) {
      const { _id, name, images, price } = product;
      const productPayload = {
        productId: _id,
        productName: name,
        productImage: images[0],
        price: price,
        quantity: quantities[product._id],
      };
      payload.orderItems.push(productPayload);
    }
    const order = await this.Order.create(payload);
    if (order?._id) {
      return {
        order,
        user: await this.User.updateUserOrder(
          { email: email },
          order._id,
          quantities
        ),
      };
    }
    return { user: null, order };
  }

  @Log()
  public async getOrderByIds(body) {
    return await this.Order.find({ _id: { $in: body.ids } });
  }
}
