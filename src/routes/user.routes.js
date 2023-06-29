import { Router } from "express";

import UserManager from "../../dao/mongo/managers/users.manager.js";
import passport from "passport";
import JwtHandler from "../services/jwt.service.js";


const router = Router();
const userManager = new UserManager();
const jwt = new JwtHandler();

//GetUsers:
router.get("/", async (req, res) => {
    try {
        const result = await userManager.getUsers();
        res.status(200).send({ status: "Success", payload: result })
    } catch (error) {
        res.status(500).send({ status: "Error", error: error });
    }
});

//CreateUser:
router.post("/register", passport.authenticate("register", { failureRedirect: "/api/users/registerfail" }), async (req, res) => {
    res.status(200).send({ status: "Success", message: "Usuario creado correctamente" });
})

// Register Fail:
router.get("/registerfail", (req, res) => {
    res.status(400);
})

// Acceso al sistema:
router.post("/login", passport.authenticate("login", { failureRedirect: "/api/users/loginfail" }), async (req, res) => {
    
    user = {
        id: req.user._id,
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        role: req.user.role,
    };
   
    jwt.generateToken(user);
    res.cookie()

});

// Login Fail:
router.get("/loginfail", (req, res) => {
    console.log(req.session.messages);
    res.status(400).send({ status: "error", error: req.session.messages })
})


export default router;