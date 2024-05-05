import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to: Ce spun romanii</h1>
      <Link to="/dashboard">
        <button>Go to dashboard</button>
      </Link>
      <p>Created by Parfene Daniel Emanuel</p>
    </div>
  );
};

export default Home;
