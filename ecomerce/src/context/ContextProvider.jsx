import React, { useState, createContext } from "react";
const initialState = {
  listaProductos: [],
  producto: null,
  categorias: [],
  presetaciones: [],
};
export const DataContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [stateApp, setStateApp] = useState(initialState);
  return (
    <DataContext.Provider value={{ stateApp, setStateApp }}>
      {children}
    </DataContext.Provider>
  );
};
export const Consumer = DataContext.Consumer;
