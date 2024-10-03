export default class WeatherData {
  constructor(conditions, temp, datetime, icon) {
    this.conditions = conditions;
    this.temp = temp;
    this.datetime = datetime;
    this.icon = icon;
  }
}
