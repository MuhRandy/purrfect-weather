export default class WeatherIcon {
  constructor(code, src) {
    this.code = code;
    this.src = src;
    this.alt = code.replace("-", " ");
  }
}
