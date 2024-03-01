import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";
import { useSavedVideos } from "@/lib/store/saved-videos.store";
import SaveIcon from "@/ui/icons/save-icon";

import VideoPreviewCard from "../components/video-preview-card/video-preview-card";
import { Grid } from "../page.styles";

import VideoPlayer from "./components/video-player/video-player";
import { MetadataContainer, RelatedVideosTitle, SaveButton, Title } from "./page.styles";

export default function WatchPage() {
  const { videoId } = useParams();
  const { addVideo } = useSavedVideos();

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

  return (
    <div>
      <VideoPlayer video={video} />

      <MetadataContainer>
        <Title>{video.title}</Title>
        <SaveButton onClick={() => addVideo({ id: video.videoId, title: video.title })}>
          <SaveIcon />
          Save
        </SaveButton>
      </MetadataContainer>

      <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
      <Grid>{relatedVideos?.map((video) => <VideoPreviewCard key={video.id.videoId} preview={video} />)}</Grid>
    </div>
  );
}
