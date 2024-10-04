export default class TempConverter {
  static fahrenheitToCelsius(fahrenheitTemp) {
    return ((fahrenheitTemp - 32) * 5) / 9;
  }

  static CelsiusToFahrenheit(celsiusTemp) {
    return (celsiusTemp * 9) / 5 + 32;
  }
}
