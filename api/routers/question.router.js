import express from "express";
import { addQuestion, getQuestions } from "../controllers/question.controller.js";

const router = express.Router();

router.post("/getQuestions", getQuestions);
router.post("/addQuestion", addQuestion);

export default router;