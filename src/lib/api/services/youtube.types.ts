import { Video } from "@/lib/models/video";
import { VideoPreview } from "@/lib/models/video-preview";

import { ServiceFunction } from "../types";

export type SearchVideosRequest = {
  q?: string;
};
export type SearchVideosResponse = VideoPreview[];

export type GetVideoRequest = {
  id: string;
};
export type GetVideoResponse = Video;

export interface YoutubeService {
  search: ServiceFunction<SearchVideosRequest, SearchVideosResponse>;
  get: ServiceFunction<GetVideoRequest, GetVideoResponse>;
}
