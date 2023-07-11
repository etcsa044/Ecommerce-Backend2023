import CartManager from "./carts.manager.js";
import ProductManager from "./products.manager.js";
import UsersManager from "./users.manager.js";

export const cartService = new CartManager
export const productService = new ProductManager();
export const usersService = new UsersManager();