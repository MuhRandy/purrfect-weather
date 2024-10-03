import Logger from "./Logger";

export default class ErrorHandler {
  static #error = [
    {
      code: 400,
      text: "Bad Request",
      desc: "The format of the API is incorrect or an invalid parameter or combination of parameters was supplied.",
    },
    {
      code: 401,
      text: "Unauthorized",
      desc: "There is a problem with the API key, account or subscription. May also be returned if a feature is requested for which the account does not have access to.",
    },
    {
      code: 404,
      text: "Not Found",
      desc: "The request cannot be matched to any valid API request endpoint structure.",
    },
    {
      code: 429,
      text: "Too Many Request",
      desc: "The account has exceeded their assigned limits.",
    },
    {
      code: 500,
      text: "Internal Server Error",
      desc: "A general error has occurred processing the request.",
    },
  ];

  static isResponseOK(response) {
    if (!response.ok) {
      this.#error.forEach((error) => {
        if (response.status === error.code)
          throw new Error(`${error.text} ${error.code}\n${error.desc}`);
      });
    }
  }

  static logError(error) {
    Logger.log(error);
  }
}
