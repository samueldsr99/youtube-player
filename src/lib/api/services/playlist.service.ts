import youtubeHttpService from "@/lib/config/axios.config";

import { PlaylistService } from "./playlist.types";

const playlistService: PlaylistService = {
  get: ({ id }) => youtubeHttpService.get(`playlists/${id}`).then((e) => e.data),
  post: (data) => youtubeHttpService.post("playlists", data).then((e) => e.data),
  put: ({ id, ...data }) => youtubeHttpService.put(`playlists/${id}`, data).then((e) => e.data),
  delete: ({ id }) => youtubeHttpService.delete(`playlists/${id}`).then((e) => e.data),

  putAddVideoToPlaylist: ({ id, data }) => youtubeHttpService.put(`playlists/${id}/videos`, data).then((e) => e.data),
  putRemoveVideoFromPlaylist: ({ playlistId, videoId }) =>
    youtubeHttpService.put(`playlists/${playlistId}/videos/${videoId}`).then((e) => e.data),
};

export default playlistService;
