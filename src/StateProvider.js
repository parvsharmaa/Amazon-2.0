import React, { createContext, useContext, useReducer } from 'react'

//Prepares the data layer -> Context API / Redux
export const StateContext = createContext();

//Wrap our App and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);