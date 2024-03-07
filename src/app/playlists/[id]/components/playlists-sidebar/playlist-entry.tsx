import { Video } from "@/lib/models/video";

import { Root, Subtitle, Thumbnail, Title } from "./playlist-entry.styles";

export interface PlaylistEntryProps {
  isActive?: boolean;
  video: Video;
  to: string;
}

export default function PlaylistEntry({ video, isActive, to }: PlaylistEntryProps) {
  return (
    <Root $isActive={isActive} to={to}>
      <Thumbnail src={video.thumbnailUrl} alt={video.title} width="100%" height="auto" />
      <div>
        <Title>{video.title}</Title>
        <Subtitle>{video.owner}</Subtitle>
      </div>
    </Root>
  );
}
