import JwtService from "../services/jwt.service.js";
import { passportCall } from "../services/passportcall.service.js";
import BaseRouter from "./Router.js";


const jwtService = new JwtService()

export default class SessionRouter extends BaseRouter {

    init() {
        this.post(
            "/register",
            ["NO_AUTH"],
            passportCall(
                "register",
                {
                    strategyType: "locals"
                }
            ),
            (req, res) => {
                res.sendSuccess();
            }
        )

        this.post(
            "/login",
            ["NO_AUTH"],
            passportCall(
                "login",
                {
                    strategyType: "locals"
                }
            ),
            (req, res) => {
                const token = jwtService.generateToken(req.user);
                res.cookie("authToken",
                    token,
                    {
                        maxAge: 1000 * 3600,
                        httpOnly: true,
                    }
                ).sendSuccess("Logueado");
            })
        this.get(
            "/jwt",
            ["PUBLIC"],
            passportCall(
                "jwt",
                {
                    strategyType: "jwt"
                }
            ),
            (req, res) => {
                res.sendSuccessWithPayload(req.user);
            })

            this.get(
                "/clear",
                (req, res) =>{
                    return res.clearCookie("authToken").sendSuccess("a la pija la cookie!")
                }
                )
    }
}