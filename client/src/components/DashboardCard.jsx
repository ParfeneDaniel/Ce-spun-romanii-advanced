import { Link } from "react-router-dom";

const DashboardCard = ({ question }) => {
  return (
    <div className="dashboardCard">
      <p>{question.question}</p>
      <div className="functionalities">
        <Link to={`/view/${question._id}`}>
          <button>View</button>
        </Link>
        <Link to={`/edit/${question._id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
