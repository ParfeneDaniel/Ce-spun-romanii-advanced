import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleStartGameClick = () => {
    navigate("/round");
  };
  return (
    <div className="backgroundHome">
      <h1>Ce spun romanii?</h1>
      <p>Coder:</p>
      <p>Parfene Daniel</p>
      <p id="designer">Designer:</p>
      <p>Grozav Medeea</p>
      <p id="questionsMakers">Questions makers:</p>
      <p>Ardelean Raul</p>
      <p>Bulzan Ionut</p>
      <p>Schipor Devis</p>
      <p>Todea Alexandra</p>
      <p id="host">Host:</p>
      <p>Moț Raul</p>
      <button onClick={handleStartGameClick} id="startGame">
        Start game
      </button>
    </div>
  );
};

export default Home;
