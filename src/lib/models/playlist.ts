import { Video } from "./video";

export interface Playlist {
  id: string;
  name: string;
  videos: Video[];
}
