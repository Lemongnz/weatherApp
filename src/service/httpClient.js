const FORECAST_API_CALL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const CURRENT_API_CALL = "https://api.weatherbit.io/v2.0/current?";

const API_KEY = "aac6370c5386405da134202b39ec0ee9";

const COUNT = 5;

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `${CURRENT_API_CALL}city=${city}&key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getForecastWeather = async (city) => {
  const response = await fetch(
    `${FORECAST_API_CALL}city=${city}&days=${COUNT}&key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
