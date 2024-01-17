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
import serverless from "serverless-http";
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb 🚀🚀"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/backend/projects", projectsRoute);
app.use("/backend/writes/", writesRoute);
app.use("/backend/writes-tech-general/", writesTechGeneralRoute);
app.use("/backend/writes-tech-programming/", writesTechProgrammingRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});


if (!process.env.LAMBDA_TASK_ROOT) {
app.listen(process.env.PORT || 5000, () => {
  console.log("connected to backend 🦋🌴");
});
}

// Ekspor app atau serverless handler jika dijalankan sebagai fungsi
export const handler = serverless(app);
