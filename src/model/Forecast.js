import WeatherData from "./WeatherData";

export default class WeatherDataDayOrHour extends WeatherData {
  constructor(datetime, conditions, humidity, icon, temp) {
    super(conditions, temp, datetime, icon);
    this.humidity = humidity;
  }
}
