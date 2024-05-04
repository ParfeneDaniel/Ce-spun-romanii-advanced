import express from "express";
import { addQuestion } from "../controllers/question.controller.js";

const router = express.Router();

router.post("/addQuestion", addQuestion);

export default router;