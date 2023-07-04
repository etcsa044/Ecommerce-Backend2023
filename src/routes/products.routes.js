import BaseRouter from "./Router.js";
import ProductController from "../controllers/product.controller.js";

const productService = new ProductController()

export default class ProductRouter extends BaseRouter {

    init() {

        this.get(
            "/",
            ["PUBLIC"],
            productService.getObjects
        )
    }


}