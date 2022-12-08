import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectsRoute from "./routes/projects.js";
import writesRoute from "./routes/writes.js";

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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/backend/projects/", projectsRoute);
app.use("/backend/writes/", writesRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("💐🌻🌿 connected to backend 🌹🦋🌴🌸");
});