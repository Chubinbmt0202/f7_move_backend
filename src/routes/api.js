import express from "express";
import customerController from "../controller/customerController";
import partnerControllers from "../controller/partnerControllers";
import homeController from "../controller/homeController";
const router = express.Router();

const initApiRoutes = (app) => {
    // render login page
    router.get("/", homeController.showLogin);
    router.get("/api/getAllBrandCar", homeController.getAllBrandCar); //done
    router.get("/api/getAllTypeCar", homeController.getAllTypeCar); //done
    router.get("/api/getAllColorCar", homeController.getAllColorCar); //done

    app.post("/sendHelp", homeController.sendHelp);

    router.post("/api/login", customerController.handleLogin);
    router.post("/api/register", customerController.handleRegister);

    router.post("/api/login-partner", partnerControllers.handleLoginPartner);
    router.post(
        "/api/register-partner",
        partnerControllers.handleRegisterPartner
    );

    router.get("/api/get-all-services", partnerControllers.getAllServices);
    router.post(
        "/api/save-rescue-require-partner",
        partnerControllers.handleSaveRescueRequirePartner
    );

    return app.use("/", router);
};

export default initApiRoutes;
