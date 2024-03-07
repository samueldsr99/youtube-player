import { useLoaderData } from "react-router";
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

export default function PlaylistDetailsPage() {
  const { id, playlist: initialData } = useLoaderData() as LoaderData;
  const [searchParams] = useSearchParams();

  const { data: playlist } = useQuery({
    queryKey: querykeys.playlists.get(id),
    queryFn: () => playlistService.get({ id }),
    initialData,
  });

  const currentVideoIndex = Number(searchParams.get("current") ?? "0");

  const isEmpty = !playlist.videos.length;

  return (
    <Root>
      {isEmpty ? (
        <>
          <Title>{playlist.name}</Title>
          <EmptyState />
        </>
      ) : (
        <>
          <VideoPlayer video={playlist.videos[currentVideoIndex]} />
        </>
      )}
    </Root>
  );
}
