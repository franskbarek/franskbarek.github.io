import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import logger from "morgan";
import projectsRoute from "./routes/projects.js";
import writesRoute from "./routes/writes.js";
import writesTechGeneralRoute from "./routes/writes-tech-general.js";
import writesTechProgrammingRoute from "./routes/writes-tech-programming.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongodb 🚀🚀"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/backend/projects/", projectsRoute);
app.use("/backend/writes/", writesRoute);
app.use("/backend/writes-tech-general/", writesTechGeneralRoute);
app.use("/backend/writes-tech-programming/", writesTechProgrammingRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("connected to backend 🦋🌴");
});
