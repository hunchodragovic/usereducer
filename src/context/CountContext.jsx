import React, { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../functions/reducer";

const CountContext = createContext({});

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Renamed variable to `state` for clarity

  return (
    <CountContext.Provider value={{ count: state, dispatch }}> {/* Using correct state variable */}
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;

export const useCountContext = () => {
  return useContext(CountContext); // No changes needed here
};
