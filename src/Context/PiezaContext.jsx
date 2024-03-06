import React, { createContext, useContext, useState } from "react";

const PiezaContext = createContext();

export const PiezaProvider = ({ children }) => {
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);

  return (
    <PiezaContext.Provider value={{ piezaSeleccionada, setPiezaSeleccionada }}>
      {children}
    </PiezaContext.Provider>
  );
};

export const usePieza = () => {
  const context = useContext(PiezaContext);
  if (!context) {
    throw new Error("usePieza debe usarse dentro de un PiezaProvider");
  }
  return context;
};
