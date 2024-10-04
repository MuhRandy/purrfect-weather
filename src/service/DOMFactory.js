import { format } from "date-fns";
import IMGHandler from "./IMGHandler";

export default class DOMFactory {
  static createWeatherData(index, forecastData, scale = "Celsius") {
    const weatherData = this.#createElement("div", {
      className: "weather-data",
    });

    const { datetime, icon, temp, conditions, description, humidity } =
      forecastData;

    const time = this.#createElement("span", {
      className: "time",
      textContent: format(datetime, "h aa"),
    });
    const dayTime = this.#createDayTime(datetime, index);
    const weather = this.createWeather("medium", icon, temp, scale);
    const desc = this.createDesc(
      conditions,
      description,
      description ? "medium" : "small",
    );
    const humidityContainer = this.#createHumidity(humidity);

    description && this.appendChild(weatherData, dayTime);
    !description && this.appendChild(weatherData, time);
    this.appendChild(weatherData, weather);
    this.appendChild(weatherData, desc);
    this.appendChild(weatherData, humidityContainer);

    return weatherData;
  }

  static createWeather(size, icon, degree, scale = "Celsius") {
    const weather = this.#createElement("div", {
      className: "weather",
    });
    const weatherIcon = this.#createWeatherIcon(size, icon);
    const temp = this.#createTemp(size, degree, scale);

    this.appendChild(weather, weatherIcon);
    this.appendChild(weather, temp);

    return weather;
  }

  static #createWeatherIcon(size, icon) {
    const imgData = IMGHandler.getWeatherIcon(icon);

    if (!imgData) throw new Error(`There no such icon with code ${icon}`);

    return this.#createElement("img", {
      className: `weather-icon ${size}`,
      attributes: {
        src: imgData.src,
        alt: imgData.alt,
      },
    });
  }

  static #createTemp(size, degreeNumber, scaleLetter = "Celsius") {
    const temp = this.#createElement("span", {
      className: `temp ${size}`,
    });
    const degree = this.#createElement("span", {
      className: "degree",
      textContent: degreeNumber,
    });
    const scale = this.#createElement("span", {
      className: "scale",
      innerHTML: scaleLetter === "Celsius" ? `&deg;C` : `&deg;F`,
    });

    this.appendChild(temp, degree);
    this.appendChild(temp, scale);

    return temp;
  }

  static #createDayTime(datetime, index) {
    const dayTime = this.#createElement("div", {
      className: "daytime",
    });
    const day = this.#createElement("span", {
      className: "day",
      textContent: index === 0 ? "Today" : format(datetime, "EEE"),
    });
    const date = this.#createElement("span", {
      className: "date",
      textContent: format(datetime, "dd/MM"),
    });

    this.appendChild(dayTime, day);
    this.appendChild(dayTime, date);

    return dayTime;
  }

  static #createHumidity(humidity) {
    const div = this.#createElement("div", {
      className: "humidity",
    });
    const dropletIcon = this.#createElement("i", {
      className: "ti ti-droplet-half-filled",
    });
    const humidityPercentage = this.#createElement("span", {
      textContent: Math.round(humidity) + "%",
    });

    this.appendChild(div, dropletIcon);
    this.appendChild(div, humidityPercentage);

    return div;
  }

  static createDesc(title, content, size) {
    const desc = this.#createElement("div", {
      className: `desc ${size}`,
    });
    const h2 = this.#createElement("h2", {
      textContent: title,
    });
    const p = this.#createElement("p", {
      textContent: content,
    });

    this.appendChild(desc, h2);
    content && this.appendChild(desc, p);

    return desc;
  }

  static #createElement(tagName, options = {}) {
    // eslint-disable-next-line no-undef
    const element = document.createElement(tagName);

    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.textContent) element.textContent = options.textContent;
    if (options.innerHTML) element.innerHTML = options.innerHTML;

    if (options.attributes) {
      Object.keys(options.attributes).forEach((attr) => {
        element.setAttribute(attr, options.attributes[attr]);
      });
    }

    return element;
  }

  static appendChild(parent, child) {
    if (parent && child) {
      parent.appendChild(child);
    }
  }

  // eslint-disable-next-line no-unused-private-class-members
  static #removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  static updateTextContent(element, newText) {
    if (element) {
      element.textContent = newText;
    }
  }

  static clearTextContent(element) {
    this.updateTextContent(element, "");
  }

  // eslint-disable-next-line no-unused-private-class-members
  static #toggleVisibility(element, isVisible) {
    if (element) {
      element.style.display = isVisible ? "block" : "none";
    }
  }

  static addEventListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  static createLoading() {
    return this.#createElement("div", {
      className: "loading",
      textContent: "Loading...",
    });
  }
}
