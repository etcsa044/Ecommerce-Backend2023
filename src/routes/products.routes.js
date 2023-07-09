import BaseRouter from "./Router.js";
import ProductController from "../controllers/product.controller.js";

const productController = new ProductController()

export default class ProductRouter extends BaseRouter {

    init() {

        this.get(
            "/",
            ["PUBLIC"],
            productController.getObjects
        )

        this.get(
            "/:id",
            ["PUBLIC"],
            productController.getObjectById
        )

        this.get(
            "/:attribute/:value",
            ["PUBLIC"],
            productController.getObjectBy
        )

        this.post(
            "/",
            ["PUBLIC"], // CORRESPONDE "ADMIN";
            productController.createProduct
        )

        this.put(
            "/:id",
            ["PUBLIC"],
           productController.updateObject
        )

        this.delete(
            "/:id",
            ["PUBLIC"],
            productController.deleteObject
        )

    }


}