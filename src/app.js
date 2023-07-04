import express from "express";
import handlebars from "express-handlebars";
import initializePassportStrategies from "./config/passport.config.js";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";

import { __src, __root, connection } from "./utils/utils.js";

import SessionRouter from "./routes/sessions.routes.js";
import userRouter from "./routes/user.routes.js";
import ViewsRouter from "./routes/views.routes.js";
import ProductRouter from "./routes/products.routes.js";


//CREACION SERVER:
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => { console.log(`listening on PORT ${PORT}`) });

// Instancias Router:
console.log("0");
const productRouter = new ProductRouter();
const sessionRouter = new SessionRouter();
const viewsRouter = new ViewsRouter();

//CONECCION A LA DB
mongoose.connect(connection);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__src}/public`));

// CONFIGURACIÓN HANDLEBARS:
app.engine("handlebars", handlebars.engine());
app.set("views", `${__src}/views`);
app.set("view engine", "handlebars");

// Passport:
app.use(passport.initialize());
initializePassportStrategies();

// Routes:
app.use("/", viewsRouter.getRouter());
app.use("/api/products", productRouter.getRouter());
app.use("/api/sessions", sessionRouter.getRouter());
app.use("/api/users", userRouter );

