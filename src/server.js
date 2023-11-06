import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);
initWebRoutes(app);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
connectDB();

app.listen(PORT, () => {
    console.log("Backend is running on the port: " + PORT);
});
