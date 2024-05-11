import { useGameContext } from "../context/GameContext";
import { data } from "../data";
import GameAnswer from "./GameAnswer";
import GameAnswerEmpty from "./GameAnswerEmpty";

const GameAnswers = () => {
  const { question } = useGameContext();
  const answers = data[question].answers;
  const otherAnswers = new Array(8 - answers.length).fill(0);
  return (
    <div className="gameAnswers">
      {answers.map((answer, index) => (
        <GameAnswer answer={answer} key={index} numberOfAnswer={index} />
      ))}
      {otherAnswers.map((_, index) => (
        <GameAnswerEmpty key={index + answers.length} />
      ))}
    </div>
  );
};

export default GameAnswers;
