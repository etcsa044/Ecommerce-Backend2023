import { fileURLToPath } from 'url';
import { dirname } from 'path';

// String de Conexión a la DB:
export const connection = "mongodb+srv://etcsa044:uCdeI4OXFqA9lN9Z@backendcluster.h3wtkp9.mongodb.net/ecommerce?retryWrites=true&w=majority"

//Cookie Parser:
export const cookieExtractor = (req) => {
    let token = null;

    if (req && req.cookies) {

        token = req.cookies["authToken"]
    }
    return token;
}

// Express Static:
const __filename = fileURLToPath(import.meta.url);
export const __src = dirname(dirname(__filename))
export const __root = dirname(dirname(dirname(__filename)));

