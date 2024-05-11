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
  const [pointsTeam1, setPointsTeam1] = useState(0);
  const [pointsTeam2, setPointsTeam2] = useState(0);
  const [redsTeam1, setRedsTeam1] = useState(3);
  const [redsTeam2, setRedsTeam2] = useState(2);
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
    pointsTeam1,
    setPointsTeam1,
    pointsTeam2,
    setPointsTeam2,
    redsTeam1,
    setRedsTeam1,
    redsTeam2,
    setRedsTeam2,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
