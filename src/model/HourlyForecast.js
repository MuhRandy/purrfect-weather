import Forecast from "./Forecast";

export default class HourlyForecast extends Forecast {
  constructor(datetime, conditions, humidity, icon, temp) {
    super(datetime, conditions, humidity, icon, temp);
  }
}
