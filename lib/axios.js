import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.apilayer.com/fixer",
});
