import { useGameContext } from "../context/GameContext";
import image from "../assets/Red_X.svg.png";

const GameTeam = ({ numberOfTeam }) => {
  const { team1, team2, pointsTeam1, pointsTeam2, redsTeam1, redsTeam2 } =
    useGameContext();
  const teams = [team1, team2];
  const teamsPoints = [pointsTeam1, pointsTeam2];
  const redsTeam = [redsTeam1, redsTeam2];
  const currentTeam = teams[numberOfTeam - 1];
  const currentPoints = teamsPoints[numberOfTeam - 1];
  const currentReds = redsTeam[numberOfTeam - 1];
  const reds = new Array(currentReds).fill(0);
  return (
    <div className="gameTeam">
      <div className="teamDetails">
        <p id="teamName">{currentTeam}</p>
        <p>{currentPoints}</p>
      </div>
      <div className="imageContainer">
        {reds.map((_, index) => (
          <img src={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GameTeam;
