import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

const dynamicService=[]

const initialState = {};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
