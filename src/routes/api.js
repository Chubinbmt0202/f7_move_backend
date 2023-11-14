import express from "express";
import customerController from "../controller/customerController";
const router = express.Router();

const initApiRoutes = (app) => {
    router.post("/api/login", customerController.handleLogin);
    router.post("/api/register", customerController.handleRegister);

    return app.use("/", router);
};

export default initApiRoutes;
