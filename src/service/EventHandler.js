import DOMRenderer from "./DOMRenderer";
import TempConverter from "./TempConverter";
import WeatherAPIClient from "./WeatherAPIClient";

export default class EventHandler {
  static scaleSelectHandler(event) {
    const temps = DOMRenderer.getElementBySelectorAll(".temp .degree");
    const scales = DOMRenderer.getElementBySelectorAll(".temp .scale");

    const scaleLetter = scales[0].innerText.slice(-1);

    if (event.target.value === "Celsius" && scaleLetter === "F") {
      temps.forEach((temp) => {
        const fahrenheitTemp = temp.textContent;

        temp.textContent = Math.round(
          TempConverter.fahrenheitToCelsius(fahrenheitTemp),
        );
      });
    }

    scales.forEach((scale) => {
      scale.innerHTML = "&deg;C";
    });

    if (event.target.value === "Fahrenheit" && scaleLetter === "C") {
      temps.forEach((temp) => {
        const celsiusTemp = temp.textContent;

        temp.textContent = Math.round(
          TempConverter.CelsiusToFahrenheit(celsiusTemp),
        );
      });

      scales.forEach((scale) => {
        scale.innerHTML = "&deg;F";
      });
    }
  }

  static searchLocationHandler(event) {
    if (event.key === "Enter") {
      WeatherAPIClient.getDataByLocation(event.target.value);
    }
  }

  static addEventListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }
}
