import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";

export default function WatchPage() {
  const { videoId } = useParams();

  const { data: video } = useQuery({
    queryKey: querykeys.youtube.get({ id: videoId as string }),
    queryFn: () => services.youtube.get({ id: videoId as string }),
    enabled: !!videoId,
  });

  console.log(video);

  return <>Watch page for video {videoId}</>;
}
