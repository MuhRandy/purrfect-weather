import DOMRenderer from "./service/DOMRenderer";
import EventHandler from "./service/EventHandler";
import WeatherAPIClient from "./service/WeatherAPIClient";
import "./styles.css";

WeatherAPIClient.getDataByLocation("Indonesia");

const selectScale = DOMRenderer.getElementBySelector("#scale");
const searchInput = DOMRenderer.getElementBySelector("input[type=search]");

selectScale.value = "Celsius";

searchInput.value = "";

EventHandler.addEventListener(
  selectScale,
  "change",
  EventHandler.scaleSelectHandler,
);
EventHandler.addEventListener(
  searchInput,
  "keydown",
  EventHandler.searchLocationHandler,
);
