import DOMFactory from "./service/DOMFactory";
import DOMRenderer from "./service/DOMRenderer";
import WeatherAPIClient from "./service/WeatherAPIClient";
import "./styles.css";

WeatherAPIClient.getDataByLocation("Indonesia");

const searchInput = DOMRenderer.getElementBySelector("input[type=search]");

DOMFactory.addEventListener(searchInput, "keydown", (event) => {
  if (event.key === "Enter") {
    WeatherAPIClient.getDataByLocation(event.target.value);
  }
});
