import { TopSide } from "./styles";
import Fav from "../fav/fav";

export default function ActualWeather({ currentWeather }) {
  return (
    <TopSide>
      {currentWeather.weather ? (
        <>
          <Fav name={currentWeather.city_name} />
          <div className="one">
            <p>
              Today in {currentWeather.city_name}, {currentWeather.country_code}
            </p>
          </div>
          <div className="image">
            <div>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`}
              />
            </div>
            <p>{currentWeather.weather.description}</p>
          </div>
          <div className="three">
            <p>{currentWeather.temp}°</p>
            <span>Feels like {Math.round(currentWeather.app_temp)}°</span>
          </div>
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </TopSide>
  );
}
