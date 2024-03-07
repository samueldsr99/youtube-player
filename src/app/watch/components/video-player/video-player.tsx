import Youtube from "react-youtube";

import { Video } from "@/lib/models/video";

import "./video-player.css";

export type VideoPlayerProps = {
  video: Video;
  onEnded?: () => void;
};

export default function VideoPlayer({ video, onEnded }: VideoPlayerProps) {
  return (
    <Youtube
      videoId={video.videoId}
      onEnd={onEnded}
      className="youtubeContainer"
      opts={{ playerVars: { autoplay: 1 } }}
    />
  );
}
