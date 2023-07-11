import CartController from "../controllers/cart.controller.js";
import BaseRouter from "./Router.js";


const cartController = new CartController();

export default class CartRouter extends BaseRouter {

    init() {
        this.get(
            "/",
            ["PUBLIC"],
            cartController.getObjects
        )

        this.get(
            "/:id",
            ["PUBLIC"],
            cartController.getObjectById
        )

        this.get(
            "/:attribute/:value",
            ["PUBLIC"],
            cartController.getObjectBy
        )

        this.post(
            "/",
            ["PUBLIC"],
            cartController.create
        )
        
        this.put(
            "/:cid/product/:pid",
            ["PUBLIC"],
            cartController.addProductToCart
        )
    }
}