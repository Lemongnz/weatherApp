import { TiHeartOutline, TiHeart } from "react-icons/ti";
import useFav from "../../hooks/useFavCity";
import { Container, CustomButton } from "./styles";

export default function Fav({ name }) {
  const { favCity, addFav, removeFav } = useFav();

  const handleClick = () => {
    favCity.includes(name) ? removeFav(name) : addFav(name);
  };

  return (
    <Container>
      <CustomButton onClick={handleClick}>
        {favCity.includes(name) ? (
          <span className="added">
            <TiHeart />
          </span>
        ) : (
          <span>
            <TiHeartOutline />
          </span>
        )}
      </CustomButton>
    </Container>
  );
}
