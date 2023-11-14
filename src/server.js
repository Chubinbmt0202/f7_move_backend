import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import cors from 'cors'
// import connectDB from "./config/connectDB";
require("dotenv").config();
const app = express();
app.use(cors());
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8080;


configViewEngine(app);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

initApiRoutes(app);
// connectDB();

app.listen(PORT, () => {
    console.log("Backend is running on the port: " + PORT);
});
