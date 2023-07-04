import BaseController from "./Controller.js";
import { productService } from "../../dao/mongo/managers/index.js";

const manager = productService;



export default class ProductController extends BaseController {
    
        constructor(){
            super(manager)
        }

        
}


