import { createContext } from "react";
import { useState } from "react";

const CityContext = createContext({});

export function CityContextProvider({ children }) {
  const [favCity, setFavCity] = useState([]);

  return (
    <CityContext.Provider value={{ favCity, setFavCity }}>
      {children}
    </CityContext.Provider>
  );
}

export default CityContext;
