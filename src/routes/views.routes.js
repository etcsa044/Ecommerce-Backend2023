
import JwtService from "../services/jwt.service.js";
import BaseRouter from "./Router.js";

const jwtService = new JwtService()

export default class ViewsRouter extends BaseRouter {

    init() {
        this.get(
            "/login",
            ["NO_AUTH"],
            (req, res) => {
                res.render("login");
            });

        this.get(
            "/register",
            ["NO_AUTH"],
            (req, res) => {
                res.render("register");
            }
        )
    }

}



// // Vista Index:
// router.get("/", privacy("PRIVATE"), (req, res) => {
//     res.render("index");
// });

// // Vista Login:
// router.get("/login", privacy("NO_AUTH"), (req, res) => {
//     res.render("login");
// });

// router.get("/register", privacy("NO_AUTH"), (req, res) => {
//     res.render("register");
// });



