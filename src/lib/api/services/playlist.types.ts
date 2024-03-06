import { Playlist } from "@/lib/models/playlist";
import { Video } from "@/lib/models/video";

import { ServiceFunction } from "../types";

export type GetPlaylistsRequest = {
  id: string;
};
export type GetPlaylistsResponse = Playlist;

export type PostPlaylistRequest = {
  name: string;
};
export type PostPlaylistResponse = void;

export type PutPlaylistRequest = {
  id: string;
  name: string;
  videos: Video[];
};
export type PutPlaylistResponse = void;

export type DeletePlaylistRequest = {
  id: string;
};
export type DeletePlaylistResponse = void;

export type PutAddVideoToPlaylistRequest = {
  id: string;
  data: Video;
};
export type PutAddVideoToPlaylistResponse = void;

export type PutRemoveVideoFromPlaylistRequest = {
  playlistId: string;
  videoId: string;
};
export type PutRemoveVideoFromPlaylistResponse = void;

export interface PlaylistService {
  get: ServiceFunction<GetPlaylistsRequest, GetPlaylistsResponse>;
  post: ServiceFunction<PostPlaylistRequest, PostPlaylistResponse>;
  put: ServiceFunction<PutPlaylistRequest, PutPlaylistResponse>;
  delete: ServiceFunction<DeletePlaylistRequest, DeletePlaylistResponse>;

  putAddVideoToPlaylist: ServiceFunction<PutAddVideoToPlaylistRequest, PutAddVideoToPlaylistResponse>;
  putRemoveVideoFromPlaylist: ServiceFunction<PutRemoveVideoFromPlaylistRequest, PutRemoveVideoFromPlaylistResponse>;
}
