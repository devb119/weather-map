import React, { useReducer, createContext, useContext } from "react";

export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, ...props }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
    {...props}
  ></StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
