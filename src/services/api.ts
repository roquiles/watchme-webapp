import axios from "axios";

export const api = axios.create({
  baseURL: "https://glacial-mountain-71430.herokuapp.com/",
});
