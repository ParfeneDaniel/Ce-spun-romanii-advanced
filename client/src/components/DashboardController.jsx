import { Link } from "react-router-dom";

const DashboardController = () => {
  return (
    <div className="dashboardController">
      <Link to="/add">
        <button>Add a question</button>
      </Link>
      <Link to="/game">
        <button>Configure the game</button>
      </Link>
    </div>
  );
};

export default DashboardController;
