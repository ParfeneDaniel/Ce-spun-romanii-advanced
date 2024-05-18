import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";

const GameCentralController = () => {
  const {
    setRed,
    scalePoints,
    setScalePoints,
    consecutive,
    setConsecutive,
    setRedsTeam1,
    setRedsTeam2,
    setQuestion,
    setShowQuestion,
    showAnswers,
    setShowAnswers,
    setPoints,
    setRound,
    setTeam1,
    setTeam2,
    setPointsTeam1,
    setPointsTeam2,
    setAddedPoints,
  } = useGameContext();
  const navigate = useNavigate();
  const handleBigRedClick = () => {
    setRed((prev) => !prev);
  };
  const handleDoublePointsClick = () => {
    if (consecutive == 2 && showAnswers == false) {
      if (scalePoints == 1) {
        setScalePoints(2);
      } else {
        setScalePoints(1);
      }
    }
  };
  const handleNextQuestionClick = () => {
    setRedsTeam1(0);
    setRedsTeam2(0);
    setScalePoints(1);
    setQuestion((prev) => prev + 1);
    setShowAnswers(false);
    setShowQuestion(false);
    setPoints(0);
    setAddedPoints(false);
    if (consecutive < 2) {
      setConsecutive((prev) => prev + 1);
    } else {
      setRound((prev) => prev + 1);
      setTeam1("");
      setTeam2("");
      setConsecutive(0);
      setPointsTeam1(0);
      setPointsTeam2(0);
      navigate("/round");
    }
  };
  return (
    <div className="gameCentralController">
      <button onClick={handleBigRedClick} id="bigX">
        X
      </button>
      <button onClick={handleNextQuestionClick}>Next</button>
      <button onClick={handleDoublePointsClick} id="doublePoints">
        Double
      </button>
    </div>
  );
};

export default GameCentralController;
