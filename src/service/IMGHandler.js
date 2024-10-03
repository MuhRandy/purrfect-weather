import WeatherIcon from "../model/WeatherIcon";
import clearDay from "../weather-icons/color/clear-day.svg";
import clearNight from "../weather-icons/color/clear-night.svg";
import cloudy from "../weather-icons/color/cloudy.svg";
import fog from "../weather-icons/color/fog.svg";
import hail from "../weather-icons/color/hail.svg";
import partlyCloudyDay from "../weather-icons/color/partly-cloudy-day.svg";
import partlyCloudyNight from "../weather-icons/color/partly-cloudy-night.svg";
import rainSnowShowersDay from "../weather-icons/color/rain-snow-showers-day.svg";
import rainSnowShowersNight from "../weather-icons/color/rain-snow-showers-night.svg";
import rainSnow from "../weather-icons/color/rain-snow.svg";
import rain from "../weather-icons/color/rain.svg";
import showersDay from "../weather-icons/color/showers-day.svg";
import showersNight from "../weather-icons/color/showers-night.svg";
import sleet from "../weather-icons/color/sleet.svg";
import snowShowersDay from "../weather-icons/color/snow-showers-day.svg";
import snowShowersNight from "../weather-icons/color/snow-showers-night.svg";
import snow from "../weather-icons/color/snow.svg";
import thunderRain from "../weather-icons/color/thunder-rain.svg";
import thunderShowersDay from "../weather-icons/color/thunder-showers-day.svg";
import thunderShowersNight from "../weather-icons/color/thunder-showers-night.svg";
import thunder from "../weather-icons/color/thunder.svg";
import wind from "../weather-icons/color/wind.svg";

export default class IMGHandler {
  static #weatherIconsList = [
    new WeatherIcon("clear-day", clearDay),
    new WeatherIcon("clear-night", clearNight),
    new WeatherIcon("cloudy", cloudy),
    new WeatherIcon("fog", fog),
    new WeatherIcon("hail", hail),
    new WeatherIcon("partly-cloudy-day", partlyCloudyDay),
    new WeatherIcon("partly-cloudy-night", partlyCloudyNight),
    new WeatherIcon("rain-snow-showers-day", rainSnowShowersDay),
    new WeatherIcon("rain-snow-showers-night", rainSnowShowersNight),
    new WeatherIcon("rain-snow", rainSnow),
    new WeatherIcon("rain", rain),
    new WeatherIcon("showers-day", showersDay),
    new WeatherIcon("showers-night", showersNight),
    new WeatherIcon("sleet", sleet),
    new WeatherIcon("snow-showers-day", snowShowersDay),
    new WeatherIcon("snow-showers-night", snowShowersNight),
    new WeatherIcon("snow", snow),
    new WeatherIcon("thunder", thunder),
    new WeatherIcon("thunder-rain", thunderRain),
    new WeatherIcon("thunder-showers-day", thunderShowersDay),
    new WeatherIcon("thunder-showers-night", thunderShowersNight),
    new WeatherIcon("wind", wind),
  ];

  static getWeatherIcon(code) {
    return this.#weatherIconsList.find(
      (weatherIcon) => weatherIcon.code === code,
    );
  }
}
