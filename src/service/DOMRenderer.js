import DOMFactory from "./DOMFactory";
import { format } from "date-fns";

export default class DOMRenderer {
  static renderLocation(location) {
    this.getElementBySelector(".location").textContent = location;
  }

  static renderCurrentWeather(
    datetime,
    condition,
    description,
    icon,
    degree,
    scale = "Celsius",
  ) {
    const time = this.getElementBySelector(".time");
    const currentWeatherContent = this.getElementBySelector(
      ".current-weather.card .content",
    );
    const weather = DOMFactory.createWeather("large", icon, degree, scale);
    const temp = DOMFactory.createDesc(condition, description, "large");

    DOMFactory.clearTextContent(time);
    DOMFactory.clearTextContent(currentWeatherContent);

    DOMFactory.updateTextContent(time, format(datetime, "p"));

    DOMFactory.appendChild(currentWeatherContent, weather);
    DOMFactory.appendChild(currentWeatherContent, temp);
  }

  static renderHourlyWeather(hourlyWeather, scale = "Celsius") {
    const hourlyWeatherContent = this.getElementBySelector(
      ".hourly-weather.card .content",
    );

    DOMFactory.clearTextContent(hourlyWeatherContent);

    hourlyWeather.forEach((dailyData, index) => {
      const weatherData = DOMFactory.createWeatherData(index, dailyData, scale);

      DOMFactory.appendChild(hourlyWeatherContent, weatherData);
    });
  }

  static renderDailyWeather(dailyWeather, scale = "Celsius") {
    const dailyWeatherContent = this.getElementBySelector(
      ".daily-weather.card .content",
    );

    DOMFactory.clearTextContent(dailyWeatherContent);

    dailyWeather.forEach((dailyData, index) => {
      const weatherData = DOMFactory.createWeatherData(index, dailyData, scale);

      DOMFactory.appendChild(dailyWeatherContent, weatherData);
    });
  }

  static renderLoadingCurrentWeather() {
    this.#renderLoading(
      this.getElementBySelector(".current-weather.card .content"),
    );
    this.#renderLoading(this.getElementBySelector(".time"));
  }

  static renderLoadingLocation() {
    this.#renderLoading(this.getElementBySelector(".location"));
  }

  static renderLoadingHourlyWeather() {
    this.#renderLoading(
      this.getElementBySelector(".hourly-weather.card .content"),
    );
  }

  static renderLoadingDailyWeather() {
    this.#renderLoading(
      this.getElementBySelector(".daily-weather.card .content"),
    );
  }

  static #renderLoading(element) {
    DOMFactory.clearTextContent(element);
    DOMFactory.appendChild(element, DOMFactory.createLoading());
  }

  static getElementBySelector(selector) {
    // eslint-disable-next-line no-undef
    return document.querySelector(selector);
  }
}
