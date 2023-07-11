import mongoose from "mongoose";
import BaseManager from "./Manager.js";
import cartModel from "../models/cart.model.js";

export default class CartManager extends BaseManager {
    constructor(){
        super(cartModel)
    }

    addProductToCart = (id, pid) => {
        return this.model.updateOne({ _id: id }, { $set: {products: { product: new mongoose.Types.ObjectId(pid), quantity: 1, cartId:id  } } })
    }
}
