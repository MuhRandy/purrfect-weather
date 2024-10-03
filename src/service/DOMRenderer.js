import DOMFactory from "./DOMFactory";

export default class DOMRenderer {
  static renderLocation(location) {
    this.#getElementBySelector(".location").textContent = location;
  }

  static renderCurrentWeather(
    condition,
    description,
    icon,
    degree,
    scale = "Celsius",
  ) {
    const currentWeatherContent = this.#getElementBySelector(
      ".current-weather.card .content",
    );
    const weather = DOMFactory.createWeather(icon, degree, scale);
    const temp = DOMFactory.createDesc(condition, description, "large");

    DOMFactory.clearTextContent(currentWeatherContent);

    DOMFactory.appendChild(currentWeatherContent, weather);
    DOMFactory.appendChild(currentWeatherContent, temp);
  }

  static #getElementBySelector(selector) {
    // eslint-disable-next-line no-undef
    return document.querySelector(selector);
  }
}
