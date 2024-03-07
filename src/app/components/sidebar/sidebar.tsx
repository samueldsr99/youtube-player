import { useLocation } from "react-router";

import { useSavedVideos } from "@/lib/store/saved-videos.store";
import PlaylistIcon from "@/ui/icons/playlist-icon";

import {
  Aside,
  Divider,
  HomeIcon,
  HomeLinkWrapper,
  IconButton,
  LinkItem,
  NavigationLinkItem,
  NavigationLinks,
  SavedVideoItem,
  SavedVideosContainer,
  SavedVideosList,
  SavedVideosTitle,
  XIcon,
  YoutubeIcon,
} from "./sidebar.styles";

const Sidebar = () => {
  const { savedVideos, removeVideo } = useSavedVideos();
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <Aside>
      <HomeLinkWrapper to="/">
        <YoutubeIcon />
      </HomeLinkWrapper>

      <NavigationLinks>
        <NavigationLinkItem to="/" $isActive={isActive("/")}>
          <HomeIcon />
          Home
        </NavigationLinkItem>
        <NavigationLinkItem to="/playlists" $isActive={isActive("/playlists")}>
          <PlaylistIcon />
          Playlists
        </NavigationLinkItem>
      </NavigationLinks>

      <Divider />

      <SavedVideosContainer>
        <SavedVideosTitle>Saved videos</SavedVideosTitle>
        <SavedVideosList>
          {savedVideos.map((video) => (
            <SavedVideoItem key={video.id}>
              <LinkItem to={`/watch/${video.id}`}>{video.title}</LinkItem>
              <IconButton onClick={() => removeVideo(video.id)}>
                <XIcon />
              </IconButton>
            </SavedVideoItem>
          ))}
        </SavedVideosList>
      </SavedVideosContainer>
    </Aside>
  );
};

export default Sidebar;
