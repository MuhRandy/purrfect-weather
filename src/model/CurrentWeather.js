import WeatherData from "./WeatherData";

export default class CurrentWeather extends WeatherData {
  constructor(
    location,
    conditions,
    description,
    temp,
    datetime,
    timezone,
    icon,
  ) {
    super(conditions, temp, datetime, icon);
    this.location = location;
    this.timezone = timezone;
    this.description = description;
  }
}
