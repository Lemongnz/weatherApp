import { Container } from "./styles";

export default function Forecast({ forecast }) {
  return (
    <Container>
      <h3>Next 5 days...</h3>
      {forecast.data.map((item, index) => {
        if (index >= 0 && index < 5) {
          return (
            <div className="item" key={index}>
              <div className="date">
                <p>{item.datetime}</p>
              </div>
              <div className="image">
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                />
              </div>
              <div className="temp">
                {Math.round(item.app_max_temp)}°/{" "}
                {Math.round(item.app_min_temp)}°
              </div>
            </div>
          );
        }
      })}
    </Container>
  );
}
