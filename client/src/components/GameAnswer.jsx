import { useState } from "react";
import { useGameContext } from "../context/GameContext";

const GameAnswer = ({ answer, numberOfAnswer }) => {
  const { setPoints } = useGameContext();
  const [showAnswer, setShowAnswer] = useState(false);
  const handleRevealsClick = () => {
    if (!showAnswer) {
      setPoints((prev) => prev + answer.points);
    } else {
      setPoints((prev) => prev - answer.points);
    }
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="gameAnswer" onClick={handleRevealsClick}>
      {showAnswer == false ? (
        <div className="closeAnswer">
          <p>{numberOfAnswer + 1}</p>
        </div>
      ) : (
        <>
          <div className="answer">{answer.answer}</div>
          <div className="answerPoints">{answer.points}</div>
        </>
      )}
    </div>
  );
};

export default GameAnswer;