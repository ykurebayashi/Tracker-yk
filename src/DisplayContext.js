import React, { createContext, useState } from "react";

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [displayChart, setDisplayChart] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(false);

  const addDisplayChart = () => {
    setDisplayChart(true);
    setDisplayForm(false);
    setDisplayTotal(false);
  };
  const addDisplayForm = () => {
    setDisplayForm(true);
    setDisplayChart(false);
    setDisplayTotal(false);
  };
  const addDisplayTotal = () => {
    setDisplayTotal(true);
    setDisplayChart(false);
    setDisplayForm(false);
  };

  return (
    <DisplayContext.Provider
      value={{
        displayChart,
        addDisplayChart,
        displayForm,
        addDisplayForm,
        displayTotal,
        addDisplayTotal,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
export default DisplayContext;
