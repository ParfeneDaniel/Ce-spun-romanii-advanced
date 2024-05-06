import AddContainer from "../components/AddContainer";
import apiRequest from "../lib/apiRequest";
import { useAddQuestionContext } from "../contexts/AddQuestionContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { question, setQuestion, answers } = useAddQuestionContext();
  const handleAddQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleSaveQuestionClick = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/addQuestion", {
        question: question,
        answers: answers,
      });
      if (response.data.message) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="add">
      <h1>Add a new question</h1>
      <input
        type="text"
        placeholder="Write you question"
        onChange={handleAddQuestionChange}
      />
      <AddContainer />
      <button onClick={handleSaveQuestionClick}>Save question</button>
    </div>
  );
};

export default Add;
