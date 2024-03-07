import type { GetVideoRequest, SearchVideosRequest } from "./api/services/youtube.types";

const querykeys = {
  youtube: {
    search: (i: SearchVideosRequest) => ["search", i],
    get: (i: GetVideoRequest) => ["get", i],
  },
  playlists: {
    get: (id: string) => ["playlist", id],
  },
};

export default querykeys;
