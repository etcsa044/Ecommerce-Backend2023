import { ProductManager } from "./products.manager.js";
import UsersManager from "./users.manager.js";

export const usersService = new UsersManager();
export const productService = new ProductManager();