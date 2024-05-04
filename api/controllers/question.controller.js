import Question from "../models/question.model.js";

export const addQuestion = (req, res) => {
  try {
    console.log(req.body)
    const newQuestion = new Question(req.body);
    newQuestion.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", errors: error.message });
  }
};
