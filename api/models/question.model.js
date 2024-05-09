import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      answer: {
        type: String,
      },
      points: {
        type: Number,
      },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
