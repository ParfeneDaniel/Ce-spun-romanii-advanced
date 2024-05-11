import GameAnswers from "../components/GameAnswers";
import GameBigRed from "../components/GameBigRed";
import GameController from "../components/GameController";
import GameTeam from "../components/GameTeam";
import { useGameContext } from "../context/GameContext";
import { data } from "../data";

const Game = () => {
  const {
    points,
    question,
    red,
    showQuestion,
    showAnswers,
    setShowQuestion,
    setShowAnswers,
  } = useGameContext();
  const handleShowQuestionClick = () => {
    setShowQuestion((prev) => !prev);
  };
  const handleShowAnswersClick = () => {
    setShowAnswers((prev) => !prev);
  };
  return (
    <div className="gameBackground">
      <div className="points">
        <h2>{points}</h2>
      </div>
      <div className="question">
        {showQuestion == false ? (
          <button onClick={handleShowQuestionClick}>Show Question</button>
        ) : (
          <h1>{data[question].question}</h1>
        )}
      </div>
      <div className="mainGame">
        <GameTeam numberOfTeam={1} />
        <div className="answers">
          {showAnswers == false ? (
            <button onClick={handleShowAnswersClick}>Show Answers</button>
          ) : (
            <GameAnswers />
          )}
        </div>
        <GameTeam numberOfTeam={2} />
      </div>
      <GameController />
      {red && <GameBigRed />}
    </div>
  );
};

export default Game;
