import React, { useState } from 'react';
import Context from './Context';

const initialState = [
  {
    value: '',
    user: null,
    posision: 0
  },
  {
    value: '',
    user: null,
    posision: 1
  },
  {
    value: '',
    user: null,
    posision: 2
  },
  {
    value: '',
    user: null,
    posision: 3
  },
  {
    value: '',
    user: null,
    posision: 4
  },
  {
    value: '',
    user: null,
    posision: 5
  },
  {
    value: '',
    user: null,
    posision: 6
  },
  {
    value: '',
    user: null,
    posision: 7
  },
  {
    value: '',
    user: null,
    posision: 8
  },
]

const Provider = ({ children }) => {
  const [tableSquare, setTableSquare] = useState(initialState);


  const context = {
    tableSquare,
    setTableSquare,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export { Provider, Context };
