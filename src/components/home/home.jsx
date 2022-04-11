import ActualWeather from "../actual-weather/actual-weather";
import Forecast from "../forecast/forecast";
import { Container } from "./styles";
import { useState } from "react";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../../service/httpClient";
import FavList from "../menu/menu";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState();

  const searchWeather = (e) => {
    if (e.key === "Enter") {
      getCurrentWeather(query).then((res) => {
        setCurrentWeather(res.data[0]);
        setQuery("");
      });
      getForecastWeather(query).then((data) => {
        setForecast(data);
      });
    }
  };

  return (
    <Container>
      <div className="search__Container">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={searchWeather}
        />
      </div>

      <div className="actualWeather">
        {currentWeather && forecast ? (
          <Container>
            <ActualWeather currentWeather={currentWeather} />
            <Forecast forecast={forecast} />
          </Container>
        ) : (
          <Container>Busca una ciudad</Container>
        )}
      </div>
      <div className="favList">
        <FavList />
      </div>
    </Container>
  );
}
