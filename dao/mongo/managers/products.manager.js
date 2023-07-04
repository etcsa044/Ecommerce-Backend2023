import BaseManager from "./Manager.js";
import productModel from "../models/product.model.js";

export class ProductManager extends BaseManager {
    constructor() {
        super(productModel);
    }
}