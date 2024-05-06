import { useAddQuestionContext } from "../contexts/AddQuestionContext";

const AddAnswer = ({ number }) => {
  const { answers, setAnswers } = useAddQuestionContext();
  const handleAddAnswerChange = (e) => {
    var answer;
    if (answers.length <= number) {
      answer = [...answers, { [e.target.name]: e.target.value }];
    } else {
      answer = answers.map((ans, index) => {
        if (index != number) {
          return ans;
        }
        return {...ans, [e.target.name]: e.target.value };
      });
    }
    setAnswers(answer);
  };
  return (
    <div className="addAnswer">
      <p>Answer {number + 1}</p>
      <div className="dataAnswer">
        <input
          type="text"
          placeholder="Write your answer"
          className="firstAnswerInput"
          id={`answer${number + 1}`}
          onChange={handleAddAnswerChange}
          name="answer"
        />
        <input
          type="number"
          placeholder="Points"
          className="secondAnswerInput"
          id={`points${number + 1}`}
          onChange={handleAddAnswerChange}
          name="points"
        />
      </div>
    </div>
  );
};

export default AddAnswer;
