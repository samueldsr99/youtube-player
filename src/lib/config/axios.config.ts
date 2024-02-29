import axios from "axios";

const youtubeHttpService = axios.create({
  baseURL: import.meta.env.VITE_YOUTUBE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default youtubeHttpService;
