import bcrypt from "bcrypt";

export default class Hasher {
    createHash = async (password) =>{
        const salts = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salts);
    }

    validatePassword = (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    }
}