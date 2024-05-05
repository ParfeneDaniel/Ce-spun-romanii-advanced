import { useEffect } from "react";
import { useQuestionContext } from "../contexts/QuestionContext";
import apiRequest from "../lib/apiRequest";

const Dashboard = () => {
  const { questions, setQuestions } = useQuestionContext();
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await apiRequest.get("/getQuestions");
        setQuestions(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchQuestions();
  }, []);
  return (
    <div>
      <h1>Dahboard</h1>
    </div>
  );
};

export default Dashboard;
