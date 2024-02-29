import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";

import VideoPreview from "./components/video-preview-card";
import { Grid, Root } from "./page.styles";

export default function IndexPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") ?? undefined;

  const { data: videos } = useQuery({
    queryKey: querykeys.youtube.search({ q: q }),
    queryFn: () => services.youtube.search({ q: q }),
  });

  return (
    <Root>
      <Grid>{videos?.map((video) => <VideoPreview key={video.id.videoId} preview={video} />)}</Grid>
    </Root>
  );
}
