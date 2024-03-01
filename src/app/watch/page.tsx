import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";
import { useSavedVideos } from "@/lib/store/saved-videos.store";
import { formatNumber, removeSpaces } from "@/lib/utils";
import SaveIcon from "@/ui/icons/save-icon";

import VideoPreviewCard from "../components/video-preview-card/video-preview-card";
import { Grid } from "../page.styles";

import VideoPlayer from "./components/video-player/video-player";
import {
  ChannelNameLink,
  Metadata,
  MetadataContainer,
  RelatedVideosTitle,
  SaveButton,
  TitleLink,
  XIcon,
} from "./page.styles";

export default function WatchPage() {
  const { videoId } = useParams();
  const { addVideo, isVideoSaved, removeVideo } = useSavedVideos();

  const { data: video } = useQuery({
    queryKey: querykeys.youtube.get({ id: videoId as string }),
    queryFn: () => services.youtube.get({ id: videoId as string }),
    enabled: !!videoId,
  });

  const relatedSearch = `${video?.owner} ${video?.title}`;

  const { data: relatedVideos } = useQuery({
    queryKey: querykeys.youtube.search({ q: relatedSearch }),
    queryFn: () => services.youtube.search({ q: relatedSearch }),
    enabled: !!video,
  });

  if (!video) {
    return <div>Loading...</div>;
  }

  const isSaved = isVideoSaved(videoId as string);

  return (
    <div>
      <VideoPlayer video={video} />

      <MetadataContainer>
        <div>
          <TitleLink to={video.url} target="_blank">
            {video.title}
          </TitleLink>
          <ChannelNameLink to={`https://youtube.com/@${removeSpaces(video.owner)}`} target="_blank">
            {video.owner}
          </ChannelNameLink>
          <Metadata>
            {formatNumber(Number(video.views))} views • {format(new Date(video.datePublished), "MMM d, yyyy")}
          </Metadata>
        </div>
        {isSaved ? (
          <SaveButton onClick={() => removeVideo(video.videoId)}>
            <XIcon />
            Remove
          </SaveButton>
        ) : (
          <SaveButton onClick={() => addVideo({ id: video.videoId, title: video.title })}>
            <SaveIcon />
            Watch Later
          </SaveButton>
        )}
      </MetadataContainer>

      <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
      <Grid>{relatedVideos?.map((video) => <VideoPreviewCard key={video.id.videoId} preview={video} />)}</Grid>
    </div>
  );
}
