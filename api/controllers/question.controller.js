import Question from "../models/question.model.js";

export const getQuestions = async (req, res) => {
  try {
    const { type } = req.body;
    const questions = await Question.find({ type });
    res.status(201).json({ questions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", errors: error.message });
  }
};

export const addQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", errors: error.message });
  }
};
