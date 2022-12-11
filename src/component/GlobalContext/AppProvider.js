import React, { createContext, useReducer } from "react";
import ServiceData from "../Home/ServiceData";
import reducer from "./Reducer";

const AppContext = createContext();

const dynamicGridBtn = [
  ...new Set(ServiceData.map((services) => services.category)),
];

const initialState = {
  serviceGrid: ServiceData.filter((m) => m.category === "service"),
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ALL FUNCTIONS

  // services selection by category
  const selectByCategory = (item) => {
    dispatch({ type: "SERVICE_CATEGORY", payload: item });
  };

  return (
    <AppContext.Provider value={{ ...state, dynamicGridBtn, selectByCategory }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
