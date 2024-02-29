import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";

import VideoPreview from "./components/video-preview-card";
import { Grid, Root } from "./page.styles";

export default function IndexPage() {
  const { data: videos } = useQuery({
    queryKey: querykeys.youtube.search({}),
    queryFn: () => services.youtube.search({}),
  });

  return (
    <Root>
      <Grid>
        {videos?.map((video) => (
          <VideoPreview key={video.id.videoId} preview={video} />
        ))}
      </Grid>
    </Root>
  );
}
