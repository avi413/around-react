import Api from "../components/Api.js";

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
      authorization: "9b621f0f-5dfe-43f1-95fd-e9cc188bcc35",
      "Content-Type": "application/json"
    }
  });
  