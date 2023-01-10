import React, { useState, createContext } from 'react';
import { Component } from 'react/cjs/react.development';

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [data, setData] = useState([{}, {}]);
  return (
    <StateContext.Provider value={[data, setData]}>
      {props.children}
    </StateContext.Provider>
  );
};

