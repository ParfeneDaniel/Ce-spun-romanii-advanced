import express from "express";
import { addQuestion, deleteQuestion, editQuestion, getQuestions } from "../controllers/question.controller.js";

const router = express.Router();

router.get("/getQuestions", getQuestions);
router.post("/addQuestion", addQuestion);
router.put("/editQuestion/:id", editQuestion);
router.delete("/deleteQuestion/:id", deleteQuestion);

export default router;