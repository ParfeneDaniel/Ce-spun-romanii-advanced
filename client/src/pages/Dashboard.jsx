import { useEffect } from "react";
import { useQuestionContext } from "../contexts/QuestionContext";
import apiRequest from "../lib/apiRequest";
import DashboardController from "../components/DashboardController";
import DashboardContainer from "../components/DashboardContainer";

const Dashboard = () => {
  const { setQuestions } = useQuestionContext();
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
    <div className="dashboard">
      <h1>Dahboard</h1>
      <DashboardController />
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;
