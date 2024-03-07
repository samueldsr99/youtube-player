import { useLoaderData } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import querykeys from "@/lib/querykeys";

import { LoaderData } from "../../loader";

import PlaylistEntry from "./playlist-entry";
import { Header, Root, Subtitle, Title, VideosList } from "./playlist-sidebar.styles";

export default function PlaylistSidebar() {
  const { id, playlist: initialData } = useLoaderData() as LoaderData;
  const [searchParams] = useSearchParams();
  const currentVideoIndex = Number(searchParams.get("current") ?? "0");

  const { data: playlist } = useQuery({
    queryKey: querykeys.playlists.get(id),
    queryFn: () => playlistService.get({ id }),
    initialData,
  });

  if (playlist.videos.length === 0) {
    return null;
  }

  return (
    <Root>
      <Header>
        <Title>{playlist.name}</Title>
        <Subtitle>
          {currentVideoIndex + 1} / {playlist.videos.length} {playlist.videos.length === 1 ? "video" : "videos"}
        </Subtitle>
      </Header>

      <VideosList>
        {playlist.videos.map((video, index) => (
          <PlaylistEntry
            to={`/playlists/${id}?current=${index}`}
            key={video.videoId}
            video={video}
            isActive={index === currentVideoIndex}
          />
        ))}
      </VideosList>
    </Root>
  );
}
