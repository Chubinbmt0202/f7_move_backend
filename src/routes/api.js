import express from "express";
import customerController from "../controller/customerController";
import homeController from "../controller/homeController";
const router = express.Router();

const initApiRoutes = (app) => {
  // render login page
  router.get("/", homeController.showLogin);
  router.get("/getAllBrandCar", homeController.ShowDataDrop); //done
  router.get("/getAllTypeCar", homeController.ShowDataDropType); //done
  router.get("/getAllColorCar", homeController.ShowDataDropColor); //done

  app.post("/sendHelp",homeController.sendHelp)

  // Api login
  router.post("/api/login");


  app.use("/", router);

  return app;
};

export default initApiRoutes;
