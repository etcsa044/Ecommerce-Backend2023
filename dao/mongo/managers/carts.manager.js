import mongoose from "mongoose";
import BaseManager from "./Manager.js";
import cartModel from "../models/cart.model.js";

export default class CartManager extends BaseManager {
    constructor() {
        super(cartModel)
    }

    addProductToCart = (id, pid) => {
        return this.model.findOneAndUpdate({ _id: id }, { $push: { products: { product: new mongoose.Types.ObjectId(pid), quantity: 1, cartId: id } } })
    }

    increaseProductQuantity = (id, pid) => {
        return this.model.findOneAndUpdate({ _id: id, 'products.product': pid }, { $inc: { 'products.$.quantity': 1 } })
    }
    decreaseProductQuantity = (id, pid) => {
        return this.model.findOneAndUpdate({ _id: id, 'products.product': pid }, { $inc: { 'products.$.quantity': -1 } })
    }

    removeProductFromCart = async (id, pid) => {
        try {
            return await this.model.findOneAndUpdate({ _id: id, 'products.product': pid }, { $pull: { products: { product: pid } } })
        } catch (error) {
            return error;
        }

    }
}
