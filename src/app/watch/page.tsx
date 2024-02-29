import { useParams } from "react-router-dom";

export default function WatchPage() {
  const { videoId } = useParams();

  return <>Watch page for video {videoId}</>;
}
