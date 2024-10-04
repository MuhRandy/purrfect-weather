export default class WeatherData {
  constructor(conditions, temp, datetime, icon) {
    this.conditions = conditions;
    this.temp = Math.round(temp);
    this.datetime = new Date(new Date().toISOString().slice(0, 11) + datetime);
    this.icon = icon;
  }
}
