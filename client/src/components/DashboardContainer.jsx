import { useQuestionContext } from "../contexts/QuestionContext";
import DashboardCard from "./DashboardCard";

const DashboardContainer = () => {
  const { questions } = useQuestionContext();
  return (
    <div className="dashboardContainer">
      {questions.map((question, index) => (
        <DashboardCard key={index} question={question} />
      ))}
    </div>
  );
};

export default DashboardContainer;
