import axios from "axios";

const instance = axios.create({
  baseURL: "https://rvy-tiktok-clone.herokuapp.com/",
});

export default instance;
