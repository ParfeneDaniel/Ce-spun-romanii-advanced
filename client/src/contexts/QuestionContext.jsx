import { createContext, useContext, useState } from "react";

export const QuestionContext = createContext();

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};

export const QuestionContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const value = { questions, setQuestions };
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
