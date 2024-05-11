import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameContextProvider = ({ children }) => {
  const [round, setRound] = useState(1);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState(0);
  const [consecutive, setConsecutive] = useState(0);
  const [pointsTeam1, setPointsTeam1] = useState(0);
  const [pointsTeam2, setPointsTeam2] = useState(0);
  const [redsTeam1, setRedsTeam1] = useState(0);
  const [redsTeam2, setRedsTeam2] = useState(0);
  const [red, setRed] = useState(false);
  const [scalePoints, setScalePoints] = useState(1);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false)
  const value = {
    round,
    setRound,
    team1,
    setTeam1,
    team2,
    setTeam2,
    points,
    setPoints,
    question,
    setQuestion,
    consecutive,
    setConsecutive,
    pointsTeam1,
    setPointsTeam1,
    pointsTeam2,
    setPointsTeam2,
    redsTeam1,
    setRedsTeam1,
    redsTeam2,
    setRedsTeam2,
    red,
    setRed,
    scalePoints,
    setScalePoints,
    showQuestion,
    setShowQuestion,
    showAnswers,
    setShowAnswers,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
