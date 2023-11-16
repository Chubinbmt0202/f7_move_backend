import express from "express";
import customerController from "../controller/customerController";
import partnerControllers from "../controller/partnerControllers";
const router = express.Router();

const initApiRoutes = (app) => {
  router.post("/api/login", customerController.handleLogin);
  router.post("/api/register", customerController.handleRegister);

  //api partner
  router.post("/api/login-partner", partnerControllers.handleLoginPartner);
  router.post(
    "/api/register-partner",
    partnerControllers.handleRegisterPartner
  );

  return app.use("/", router);
};

export default initApiRoutes;
