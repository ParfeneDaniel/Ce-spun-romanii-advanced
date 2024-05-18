import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleStartGameClick = () => {
    navigate("/round");
  };
  return (
    <div className="backgroundHome">
      <div className="title">
        <h1>Ce spun romanii?</h1>
      </div>
      <div className="content">
        <div className="creators">
          <div className="coder">
            <h3>Coder:</h3>
            <p>Parfene Daniel</p>
          </div>
          <div className="designer">
            <h3>Designer:</h3>
            <p>Grozav Medeea</p>
          </div>
        </div>
        <div className="button">
          <button onClick={handleStartGameClick}>
            Start game
          </button>
        </div>
        <div className="helpers">
          <div className="questionsMakers">
            <h3>Helpers:</h3>
            <p>Ardelean Raul</p>
            <p>Bulzan Ionut</p>
            <p>Schipor Devis</p>
            <p>Todea Alexandra</p>
          </div>
          <div className="host">
            <h3>Host:</h3>
            <p>Moț Raul</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
