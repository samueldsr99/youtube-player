import { useLoaderData, useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import VideoPlayer from "@/app/watch/components/video-player/video-player";
import playlistService from "@/lib/api/services/playlist.service";
import querykeys from "@/lib/querykeys";
import { Button } from "@/ui";
import MagnifyingGlassIcon from "@/ui/icons/magnifying-glass-icon";

import { LoaderData } from "./loader";
import { EmptyContainer, Root, Title } from "./page.styles";

const EmptyState = () => (
  <EmptyContainer>
    <Link to="/">
      <Button $variant="secondary" $size="lg">
        <MagnifyingGlassIcon />
        Search for videos
      </Button>
    </Link>
  </EmptyContainer>
);

export const getBoundedIndex = (index: number, length: number) => {
  if (index < 0) {
    return 0;
  }

  if (index > length - 1) {
    return length - 1;
  }

  return index;
};

export default function PlaylistDetailsPage() {
  const { id, playlist: initialData } = useLoaderData() as LoaderData;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data: playlist } = useQuery({
    queryKey: querykeys.playlists.get(id),
    queryFn: () => playlistService.get({ id }),
    initialData,
  });

  const currentVideoIndex = getBoundedIndex(Number(searchParams.get("current") ?? "0"), playlist.videos.length);

  const isLastVideo = currentVideoIndex === playlist.videos.length - 1;

  const isEmpty = !playlist.videos.length;

  const handleVideoEnded = () => {
    if (isLastVideo) {
      navigate(`/playlists/${id}`);
    } else {
      navigate(`/playlists/${id}?current=${currentVideoIndex + 1}`);
    }
  };

  return (
    <Root>
      {isEmpty ? (
        <>
          <Title>{playlist.name}</Title>
          <EmptyState />
        </>
      ) : (
        <>
          <VideoPlayer video={playlist.videos[currentVideoIndex]} onEnded={handleVideoEnded} />
        </>
      )}
    </Root>
  );
}
