import type {
  GetVideoRequest,
  SearchVideosRequest,
} from "./api/services/youtube.types";

const querykeys = {
  youtube: {
    search: (i: SearchVideosRequest) => ["search", i],
    get: (i: GetVideoRequest) => ["get", i],
  },
};

export default querykeys;
