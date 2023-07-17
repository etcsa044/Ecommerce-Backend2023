import { usersService } from "../../dao/mongo/managers/index.js";
import { passportCall } from "../services/passportcall.service.js";
import BaseController from "./Controller.js";

const manager = usersService;


export default class UserController extends BaseController {

    constructor() {
        super(manager);
    }

    createUser = async (req, res) => {

        
        passportCall(
            "register",
            {
                strategyType: "locals"
            }
        ),
            (req, res) => {
                res.sendSuccess();
            }
    }

}