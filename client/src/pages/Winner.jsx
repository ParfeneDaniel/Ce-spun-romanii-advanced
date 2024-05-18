import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";

const Winner = () => {
  const {
    pointsTeam1,
    pointsTeam2,
    team1,
    team2,
    setRound,
    setPointsTeam1,
    setPointsTeam2,
    setTeam1,
    setTeam2,
  } = useGameContext();
  const navigate = useNavigate();
  const winner = pointsTeam1 > pointsTeam2 ? team1 : team2;
  const handleNextRoundClick = () => {
    setRound((prev) => prev + 1);
    setTeam1("");
    setTeam2("");
    setPointsTeam1(0);
    setPointsTeam2(0);
    navigate("/round");
  };
  return (
    <div className="backgroundWinner">
      <h2>Winner</h2>
      <h1>{winner}</h1>
      <button onClick={handleNextRoundClick}>Next Round</button>
    </div>
  );
};

export default Winner;
