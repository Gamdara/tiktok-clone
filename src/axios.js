import axios from "axios";

const instance = axios.create({
  baseURL: "http://rvy-tiktok-clone.herokuapp.com/",
});

export default instance;
