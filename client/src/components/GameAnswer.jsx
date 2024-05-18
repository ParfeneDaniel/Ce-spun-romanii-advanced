import { useState } from "react";
import { useGameContext } from "../context/GameContext";

const GameAnswer = ({ answer, numberOfAnswer }) => {
  const { setPoints, scalePoints } = useGameContext();
  const [showAnswer, setShowAnswer] = useState(false);
  const isDoubleClass = scalePoints == 2 ? "colorAnswerPoints" : "";
  const classes = `answerPoints ${isDoubleClass}`;
  const handleRevealsClick = () => {
    if (!showAnswer) {
      setPoints((prev) => prev + scalePoints * answer.points);
    } else {
      setPoints((prev) => prev - scalePoints * answer.points);
    }
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="gameAnswer" onClick={handleRevealsClick}>
      {showAnswer == false ? (
        <div className="closeAnswer">
          {numberOfAnswer + 1}
        </div>
      ) : (
        <div className="openAnswer">
          <div className="answer">{answer.answer}</div>
          <div className={classes}>{answer.points * scalePoints}</div>
        </div>
      )}
    </div>
  );
};

export default GameAnswer;
