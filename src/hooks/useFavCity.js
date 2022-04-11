import CityContext from "../context/cityContext";
import { useCallback, useContext } from "react";

export default function useFavCity() {
  const { favCity, setFavCity } = useContext(CityContext);

  const addFav = useCallback(
    (city) => {
      setFavCity((prev) => [...prev, city]);
    },
    [setFavCity]
  );

  const removeFav = useCallback(
    (city) => {
      setFavCity(favCity.filter((c) => c !== city));
    },
    [setFavCity, favCity]
  );

  return { favCity, addFav, removeFav };
}
