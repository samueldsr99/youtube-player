import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";
import SaveIcon from "@/ui/icons/save-icon";

import VideoPreviewCard from "../components/video-preview-card/video-preview-card";
import { Grid } from "../page.styles";

import VideoPlayer from "./components/video-player/video-player";
import { ActionsContainer, SaveButton, Title } from "./page.styles";

export default function WatchPage() {
  const { videoId } = useParams();

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
      <Title>{video.title}</Title>
      <VideoPlayer video={video} />

      <ActionsContainer>
        <SaveButton>
          <SaveIcon />
          Save
        </SaveButton>
      </ActionsContainer>

      <Grid>{relatedVideos?.map((video) => <VideoPreviewCard key={video.id.videoId} preview={video} />)}</Grid>
    </div>
  );
}
