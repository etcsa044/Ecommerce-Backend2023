import userModel from "../models/user.model.js";
import BaseManager from "./Manager.js";


export default class UsersManager extends BaseManager{

    constructor() {
        super(userModel);
    }

}