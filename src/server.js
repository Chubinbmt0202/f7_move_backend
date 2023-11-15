import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

initApiRoutes(app);
// connectDB();

app.listen(PORT, () => {
    console.log("Backend is running on the port: " + PORT);
});
