import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 17063dcb820c33c9c9d7f4633dfd556a5da18e86e4a660ceb7edc23f236ed1f8"
  }
});
