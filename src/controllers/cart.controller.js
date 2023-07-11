import BaseController from "./Controller.js";
import { cartService, productService } from "../../dao/mongo/managers/index.js";


export default class CartController extends BaseController {
    constructor() {
        super(cartService,productService)        
    }
    cartManager = cartService
    prodManager = productService
    
    create = async (req, res) => {
        const newCart = req.body;
        console.log(newCart);
        this.cartManager.create(newCart);
        res.sendSuccess("Cart created successfully")
    }
    
    addProductToCart = async (req, res) => {
        const { cid, pid } = req.params;
        const cart = await this.cartManager.getById(cid);
        const product = await this.prodManager.getById(pid);

        try {
            const result = this.cartManager.addProductToCart(cid, pid);
            console.log(result)
            res.sendStatus(200);
        } catch (error) {
            res.sendInternalError(error);
        }

    }
}