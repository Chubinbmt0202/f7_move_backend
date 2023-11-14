import express from "express";
import customerController from "../controller/customerController";
import homeController from "../controller/homeController"
const router = express.Router();

const initApiRoutes = (app) => {

    // render login page
    router.get("/", homeController.showLogin);
    
    // Api login
    router.post("/api/login", );

    router.get("/api/getCRUD", customerController.getCRUD);

    app.use("/", router)

    return app
};

export default initApiRoutes;
