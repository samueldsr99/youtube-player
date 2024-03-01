import { Video } from "@/lib/models/video";

import { Iframe } from "./video-player.styles";

export type VideoPlayerProps = {
  video: Video;
};

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return <Iframe src={`https://www.youtube.com/embed/${video.videoId}`} allowFullScreen width={300} height={300} />;
}
