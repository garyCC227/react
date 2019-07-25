import axios from "axios";

const KEY = "AIzaSyBgW47Gnv4aU9XI16wJVc_RfwTibyX73zw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
