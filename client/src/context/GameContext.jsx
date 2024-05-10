import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameContextProvider = ({ children }) => {
  const [round, setRound] = useState(1);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const value = { round, setRound, team1, setTeam1, team2, setTeam2 };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
