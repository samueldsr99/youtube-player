import { ChannelSkeleton, ImgSkeleton, Root, TitleSkeleton } from "./video-preview-skeleton.styles";

export default function VideoPreviewSkeleton() {
  return (
    <Root>
      <ImgSkeleton />
      <TitleSkeleton />
      <ChannelSkeleton />
    </Root>
  );
}
