import { usePlaylists } from "@/lib/store/playlists.store";

import PlaylistCard from "./components/playlist-card/playlist-card";
import { EmptyState, PageTitle, PlaylistItem, PlaylistsList, Root } from "./page.styles";

export default function PlaylistsPage() {
  const { playlists } = usePlaylists();

  return (
    <Root>
      <PageTitle>Playlists</PageTitle>

      {playlists.length > 0 ? (
        <PlaylistsList>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist.id}>
              <PlaylistCard id={playlist.id} name={playlist.name} to="#" />
            </PlaylistItem>
          ))}
        </PlaylistsList>
      ) : (
        <EmptyState>Empty</EmptyState>
      )}
    </Root>
  );
}
