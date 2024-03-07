import { Outlet } from "react-router";

import PlaylistSidebar from "./components/playlists-sidebar/playlist-sidebar";
import { Content, Root } from "./outlet.styles";

export default function PlaylistDetailsOutlet() {
  return (
    <Root>
      <Content>
        <Outlet />
      </Content>
      <PlaylistSidebar />
    </Root>
  );
}
