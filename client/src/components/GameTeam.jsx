import { useGameContext } from "../context/GameContext";

const GameTeam = ({ numberOfTeam }) => {
  const { team1, team2, pointsTeam1, pointsTeam2 } = useGameContext();
  const teams = [team1, team2];
  const teamsPoints = [pointsTeam1, pointsTeam2];
  const currentTeam = teams[numberOfTeam - 1];
  const currentPoints = teamsPoints[numberOfTeam - 1];
  return (
    <div className="gameTeam">
      <div className="teamDetails">
        <p>Team:</p>
        <p>{currentTeam}</p>
        <p>{currentPoints}</p>
      </div>
      <div className="imageContainer"></div>
    </div>
  );
};

export default GameTeam;
