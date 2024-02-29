import youtubeHttpService from "@/lib/config/axios.config";

import { YoutubeService } from "./youtube.types";

const youtubeService: YoutubeService = {
  search: ({ q }) =>
    youtubeHttpService.get("search", { params: { q } }).then((e) => e.data),
  get: ({ id }) => youtubeHttpService.get(`videos/${id}`).then((e) => e.data),
};

export default youtubeService;
