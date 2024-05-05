import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectedToMondoDB } from "./db/config.js";
import questionRouter from "./routers/question.router.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/question", questionRouter);

app.listen(PORT, () => {
  connectedToMondoDB(), console.log("Server is running");
});
