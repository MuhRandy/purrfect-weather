import Forecast from "./Forecast";

export default class DailyForecast extends Forecast {
  constructor(
    datetime,
    conditions,
    description,
    humidity,
    icon,
    temp,
    sunrise,
    sunset,
    hoursWeatherData = [],
  ) {
    super(datetime, conditions, humidity, icon, temp);
    this.hoursWeatherData = hoursWeatherData;
    this.description = description;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.description = description;
  }
}
