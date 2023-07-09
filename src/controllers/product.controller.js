import BaseController from "./Controller.js";
import { productService } from "../../dao/mongo/managers/index.js";

const manager = productService;



export default class ProductController extends BaseController {
    
        constructor(){
            super(manager)
        }

        //create
    createProduct = async (req, res) => {

        const products = await this.manager.get()

        const {
            title,
            description,
            category,
            thumbnail,
            code,
            price,
            stock
        } = req.body;

        //"complete values" validation:
        if (!title || !description || !category || !thumbnail || !code || !price || !stock) return res.sendIncompletesValues();

        //"duplicated code" validation:
        let exist = products.some(e => e.code === code);

        if (exist) return res.status(400).send({status:"error", message: "The entered code already exists"})
        
        const productToAdd = {
            title,
            description,
            category,
            thumbnail,
            code,
            price,
            stock
        }

        try {
            this.manager.create(productToAdd);
            res.sendSuccess();
        } catch (error) {
            res.sendInternalError(error)
        }

    }
}


