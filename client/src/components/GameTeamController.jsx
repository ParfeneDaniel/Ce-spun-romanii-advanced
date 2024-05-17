import { useGameContext } from "../context/GameContext";

const GameTeamController = ({ numberOfTeam }) => {
  const {
    redsTeam1,
    redsTeam2,
    setRedsTeam1,
    setRedsTeam2,
    setPointsTeam1,
    setPointsTeam2,
    points,
  } = useGameContext();
  const reds = [redsTeam1, redsTeam2];
  const setReds = [setRedsTeam1, setRedsTeam2];
  const currentReds = reds[numberOfTeam - 1];
  const currentSetReds = setReds[numberOfTeam - 1];
  const setPoints = [setPointsTeam1, setPointsTeam2];
  const currentSetPoints = setPoints[numberOfTeam - 1];
  const handleAddRedClick = () => {
    if (currentReds < 3) {
      currentSetReds((prev) => prev + 1);
    }
  };
  const handleAddPointsClick = () => {
    currentSetPoints((prev) => prev + points);
  };
  return (
    <div className="gameTeamController">
      <button onClick={handleAddRedClick} id="redX">X</button>
      <button onClick={handleAddPointsClick} id="greenPoints">+</button>
    </div>
  );
};

export default GameTeamController;
