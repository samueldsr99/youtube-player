import { VideoPreview } from "@/lib/models/video-preview";
import { formatNumber } from "@/lib/utils";
import PlayIcon from "@/ui/icons/play-icon";

import { ChannelName, HoverableOverlay, ImageContainer, Img, Root, Title, Views } from "./video-preview-card.styles";

export interface VideoPreviewCardProps {
  preview: VideoPreview;
}

export default function VideoPreviewCard({ preview }: VideoPreviewCardProps) {
  return (
    <Root to={`/watch/${preview.id.videoId}`}>
      <ImageContainer>
        <HoverableOverlay>
          <PlayIcon />
          Watch
        </HoverableOverlay>
        <Img src={preview.snippet.thumbnails.url} alt={preview.snippet.title} width={300} height={220} />
      </ImageContainer>

      <div>
        <Title>{preview.title}</Title>
        <ChannelName>{preview.channelName}</ChannelName>
        <Views>
          {formatNumber(Number(preview.views))} views • {preview.snippet.publishedAt}
        </Views>
      </div>
    </Root>
  );
}
