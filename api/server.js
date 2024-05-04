import express from "express";
import dotenv from "dotenv";
import { connectedToMondoDB } from "./db/config.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  connectedToMondoDB(), console.log("Server is running");
});
