import express from "express";
import customerController from "../controller/customerController";
import partnerControllers from "../controller/partnerControllers";
import homeController from "../controller/homeController";
const router = express.Router();

const initApiRoutes = (app) => {
    // render login page
    router.get("/", homeController.showLogin);
    router.get("/getAllBrandCar", homeController.ShowDataDrop); //done
    router.get("/getAllTypeCar", homeController.ShowDataDropType); //done
    router.get("/getAllColorCar", homeController.ShowDataDropColor); //done

    app.post("/sendHelp", homeController.sendHelp);

    router.post("/api/login", customerController.handleLogin);
    router.post("/api/register", customerController.handleRegister);

    router.post("/api/login-partner", partnerControllers.handleLoginPartner);
    router.post(
        "/api/register-partner",
        partnerControllers.handleRegisterPartner
    );


    return app.use("/", router);
};

export default initApiRoutes;
