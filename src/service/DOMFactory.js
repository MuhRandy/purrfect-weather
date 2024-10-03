import rain from "../weather-icons/color/rain.svg";
import IMGHandler from "./IMGHandler";

export default class DOMFactory {
  static createWeather(icon, degree, scale = "Celsius") {
    const weather = this.#createElement("div", {
      className: "weather",
    });
    const weatherIcon = this.#createWeatherIcon("large", icon);
    const temp = this.#createTemp("large", degree, scale);

    this.appendChild(weather, weatherIcon);
    this.appendChild(weather, temp);

    return weather;
  }

  static #createWeatherIcon(size, icon) {
    const imgData = IMGHandler.getWeatherIcon(icon);
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
    this.appendChild(desc, p);

    return desc;
  }

  // Method to create an element with optional classes and attributes
  static #createElement(tagName, options = {}) {
    // eslint-disable-next-line no-undef
    const element = document.createElement(tagName);

    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.textContent) element.textContent = options.textContent;
    if (options.innerHTML) element.innerHTML = options.innerHTML;

    // Add attributes
    if (options.attributes) {
      Object.keys(options.attributes).forEach((attr) => {
        element.setAttribute(attr, options.attributes[attr]);
      });
    }

    return element;
  }

  // Method to append a child element to a parent
  static appendChild(parent, child) {
    if (parent && child) {
      parent.appendChild(child);
    }
  }

  // Method to remove an element
  static #removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  // Method to update text content
  static #updateTextContent(element, newText) {
    if (element) {
      element.textContent = newText;
    }
  }

  static clearTextContent(element) {
    this.#updateTextContent(element, "");
  }

  // Method to show or hide an element
  static #toggleVisibility(element, isVisible) {
    if (element) {
      element.style.display = isVisible ? "block" : "none";
    }
  }

  // Method to attach an event listener to an element
  static #addEventListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }
}
