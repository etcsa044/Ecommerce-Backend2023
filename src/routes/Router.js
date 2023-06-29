import { Router } from "express";
import { passportCall } from "../services/passportcall.service.js";

export default class BaseRouter {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() { };

    getRouter = () => this.router;


    get(path, policies, ...callbacks) {
        this.router.get(
            path,
            this.generateCustomResponses,
            passportCall("jwt", { strategyType: "jwt" }),
            this.handlePolicies(policies),
            this.applyCallbacks(callbacks)
        );
    }

    
    post(path, policies, ...callbacks) {
        this.router.post(path, this.generateCustomResponses, passportCall("jwt", { strategyType: "jwt" }), this.handlePolicies(policies), this.applyCallbacks(callbacks));
    }
    put(path, policies, ...callbacks) {
        this.router.put(path, this.generateCustomResponses, passportCall("jwt", { strategyType: "jwt" }), this.handlePolicies(policies), this.applyCallbacks(callbacks));
    }
    delete(path, policies, ...callbacks) {
        this.router.delete(path, this.generateCustomResponses, passportCall("jwt", { strategyType: "jwt" }), this.handlePolicies(policies), this.applyCallbacks(callbacks));
    }


    // Middleware Custom Responses: 
    generateCustomResponses = (req, res, next) => {
        res.sendSuccess = message => res.send({ status: "success", message });
        res.sendSuccessWithPayload = payload => res.send({ status: "success", payload });
        res.sendInternalError = error => res.status(500).send({ status: "error", error });
        res.sendUnauthorized = error => res.status(400).send({ status: "error", error });
        next();
    }

    // Manejo de Politicas:

    handlePolicies = policies => {
        return (req, res, next) => {
            if (policies[0] === "PUBLIC") return next();
            const user = req.user;
            if (policies[0] === "NO_AUTH" && user) return res.status(401).send({ status: "error", error: "Unauthorized" });
            if (policies[0] === "NO_AUTH" && !user) return next();
            if (!user) return res.status(401).send({ status: "error", error: req.error });
            if (!policies.includes(user.role.toUppercase())) return res.status(403).send({ status: "error", error: "Forbidden" });
            next();
        }
    };


    // Funcion que retorna los callbacks aplicados para los metodos GET, POST, PUT, DELETE.
    applyCallbacks(callbacks) {
        return callbacks.map(callback => async (...params) => {
            try {
                await callback.apply(this, params);
            } catch (error) {
                params[1].sendInternalError(error); //params[1]: hace referencia a el 2do parametro recibido que siempre es RES [req, res, next]
            }
        })
    }



}