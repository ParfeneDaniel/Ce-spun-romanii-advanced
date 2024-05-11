import GameAnswers from "../components/GameAnswers";
import GameController from "../components/GameController";
import GameTeam from "../components/GameTeam";
import { useGameContext } from "../context/GameContext";
import { data } from "../data";

const Game = () => {
  const { points, currentQuestion } = useGameContext();
  return (
    <div className="gameBackround">
      <div className="points">
        <h2>{points}</h2>
      </div>
      <h1>{data[currentQuestion].question}</h1>
      <div className="mainGame">
        <GameTeam numberOfTeam={1} />
        <GameAnswers />
        <GameTeam numberOfTeam={2} />
      </div>
      <GameController />
    </div>
  );
};

export default Game;
