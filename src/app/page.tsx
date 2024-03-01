import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";

import VideoPreview from "./components/video-preview-card";
import VideoPreviewSkeleton from "./components/video-preview-skeleton/video-preview-skeleton";
import { Grid, Root } from "./page.styles";

const LoadingState = () => {
  return [...new Array(10)].map((_, index) => <VideoPreviewSkeleton key={index} />);
};

export default function IndexPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") ?? undefined;

  const { data: videos, isLoading: isLoadingVideos } = useQuery({
    queryKey: querykeys.youtube.search({ q: q }),
    queryFn: () => services.youtube.search({ q: q }),
  });

  return (
    <Root>
      <Grid>
        {isLoadingVideos ? (
          <LoadingState />
        ) : (
          videos?.map((video) => <VideoPreview key={video.id.videoId} preview={video} />)
        )}
      </Grid>
    </Root>
  );
}
