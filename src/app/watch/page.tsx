import { useLoaderData, useParams } from "react-router-dom";
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
import type { LoaderData } from "./loader";
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
  const initialData = useLoaderData() as LoaderData;

  const { data: video } = useQuery({
    queryKey: querykeys.youtube.get({ id: videoId as string }),
    queryFn: () => services.youtube.get({ id: videoId as string }),
    enabled: !!videoId,
    initialData,
  });

  const relatedSearch = `${video?.owner} ${video?.title}`;

  const { data: relatedVideos, isLoading: isLoadingRelatedVideos } = useQuery({
    queryKey: querykeys.youtube.search({ q: relatedSearch }),
    queryFn: () => services.youtube.search({ q: relatedSearch }),
    enabled: !!video,
  });

  const isSaved = isVideoSaved(videoId as string);

  const notFoundRelatedVideos = !isLoadingRelatedVideos && !Array.isArray(relatedVideos);

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
      {notFoundRelatedVideos ? (
        <div>Empty</div>
      ) : (
        <Grid>{relatedVideos?.map((video) => <VideoPreviewCard key={video.id.videoId} preview={video} />)}</Grid>
      )}
    </div>
  );
}
