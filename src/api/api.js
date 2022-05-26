import axios from "axios";

const url = "https://localhost:4000/";

const instance = axios.create({
  headers: { "Access-Cotnrol-Allow-Origin": "*" },
  baseURL: url,
  withCredentials: true,
});

export const API = {
  uploadData() {
    return instance.post("/feedback").then((res) => {
      return res;
    });
  },
};
