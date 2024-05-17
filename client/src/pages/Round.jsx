import { useNavigate } from "react-router-dom";
import RoundTeam from "../components/RoundTeam";
import { useGameContext } from "../context/GameContext";

const Round = () => {
  const { round } = useGameContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };
  return (
    <div className="backgroundRound">
      <h1>Round {round}</h1>
      <div className="nameOfTeams">
        <RoundTeam numberOfTeam={1} />
        <RoundTeam numberOfTeam={2} />
      </div>
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default Round;
