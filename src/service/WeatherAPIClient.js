import ErrorHandler from "./ErrorHandler";
import CurrentWeather from "../model/CurrentWeather";
import DailyForecast from "../model/DailyForecast";
import HourlyForecast from "../model/HourlyForecast";
import Logger from "./Logger";
import DOMRenderer from "./DOMRenderer";

export default class WeatherAPIClient {
  static #API_KEY = "R6ECFUPAEQKGX5DZGSCPT5KXU";
  static #URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

  static async getDataByLocation(location) {
    try {
      const request = this.#createRequest(
        `${this.#URL + location}?unitGroup=metric&key=${this.#API_KEY}&contentType=json`,
      );

      DOMRenderer.renderLoadingLocation();
      DOMRenderer.renderLoadingCurrentWeather();
      DOMRenderer.renderLoadingHourlyWeather();
      DOMRenderer.renderLoadingDailyWeather();

      // eslint-disable-next-line no-undef
      const response = await fetch(request);
      Logger.log(response);

      ErrorHandler.isResponseOK(response);

      const json = await response.json();
      Logger.log(json);

      const currentWeather = this.#getCurrentWeatherData(json);
      const dailyForecast = this.#getDailyForecastData(json);

      Logger.log(currentWeather);
      Logger.log(dailyForecast);

      const { datetime, conditions, description, icon, temp } = currentWeather;

      DOMRenderer.renderLocation(currentWeather.location);
      DOMRenderer.renderCurrentWeather(
        datetime,
        conditions,
        description,
        icon,
        temp,
      );
      DOMRenderer.renderHourlyWeather(dailyForecast[0].hoursWeatherData);
      DOMRenderer.renderDailyWeather(dailyForecast);

      return currentWeather;
    } catch (error) {
      Logger.log(error);
    }
  }

  static #getCurrentWeatherData(responseData) {
    const { resolvedAddress, timezone, description } = responseData;
    const { conditions, temp, datetime, icon } = responseData.currentConditions;

    const currentWeather = new CurrentWeather(
      resolvedAddress,
      conditions,
      description,
      temp,
      datetime,
      timezone,
      icon,
    );

    return currentWeather;
  }

  static #getDailyForecastData(responseData) {
    return responseData.days.map((dailyForecastData) => {
      const {
        datetime,
        conditions,
        description,
        humidity,
        icon,
        temp,
        sunrise,
        sunset,
      } = dailyForecastData;

      console.log(icon);

      const dailyForecast = new DailyForecast(
        datetime,
        conditions,
        description,
        humidity,
        icon,
        temp,
        sunrise,
        sunset,
      );

      dailyForecastData.hours.forEach((hourData) => {
        const { datetime, conditions, humidity, icon, temp } = hourData;
        const weatherDataHour = new HourlyForecast(
          datetime,
          conditions,
          humidity,
          icon,
          temp,
        );

        dailyForecast.hoursWeatherData.push(weatherDataHour);
      });

      return dailyForecast;
    });
  }

  static #createRequest(request) {
    // eslint-disable-next-line no-undef
    return new Request(request);
  }
}
