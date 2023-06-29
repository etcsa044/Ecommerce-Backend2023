import jwt from "jsonwebtoken";


export default class JwtService {

    constructor(){
        this.secret = "jwtS3cret";
    }

    generateToken = (user) => {
        const token = jwt.sign({ user },this.secret, { expiresIn: "1h" });
        return token;
    }

    verify = (token) => {
        jwt.verify(token, this.secret, (error, credentials) => {
            if(error) return resizeBy.status(401).send({error:"Token inválido"});
            return credentials.user;
        })
    }

    

}
