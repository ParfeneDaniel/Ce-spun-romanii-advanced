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
        required: true,
      },
      points: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
