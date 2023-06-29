import JwtHandler from "../services/jwt.service.js";

const jwt = new JwtHandler

export const authToken = (req, res, next) =>{

    const authHeader = req.headers.authorization;
    if(!authHeader) res.status(401).send({status:"error", error:"No Autenticado"});
    const token = authHeader.split(" ")[1];

    req.user = jwt.verify(token);

    next();
}