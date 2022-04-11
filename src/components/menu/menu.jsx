import useFavCity from "../../hooks/useFavCity";
import BurguerButton from "../burguerButton/burguerButton";
import { Container, BgDiv, FavElement } from "./styles";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FavList() {
  const { favCity } = useFavCity();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <div className="principalButton">
        <BurguerButton prop={clicked} handleClick={handleClick} />
      </div>
      <div className={`list ${clicked ? "active" : ""}`}>
        {favCity ? (
          favCity.map((city) => (
            <FavElement key={city}>
              <button>{city}</button>
              <FaMapMarkerAlt />
            </FavElement>
          ))
        ) : (
          <div className="list"> No hay favoritos </div>
        )}
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </Container>
  );
}
