import { createContext, useContext, useState } from "react";

export const AddQuestionContext = createContext();

export const useAddQuestionContext = () => {
  return useContext(AddQuestionContext);
};

export const AddQuestionContextProvider = ({ children }) => {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const value = { question, setQuestion, answers, setAnswers };
  return (
    <AddQuestionContext.Provider value={value}>
      {children}
    </AddQuestionContext.Provider>
  );
};
