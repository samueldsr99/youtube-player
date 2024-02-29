import {
  Aside,
  Divider,
  HomeIcon,
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

const links = [
  {
    id: 1,
    title: "Video 1",
    url: "/",
  },
  {
    id: 2,
    title: "Video 2 with loooooooong loooooooong loooooooong loooooooong text",
    url: "/about",
  },
];

const Sidebar = () => {
  return (
    <Aside>
      <YoutubeIcon />

      <NavigationLinks>
        <NavigationLinkItem to="/" $isActive>
          <HomeIcon />
          Home
        </NavigationLinkItem>
      </NavigationLinks>

      <Divider />

      <SavedVideosContainer>
        <SavedVideosTitle>Saved videos</SavedVideosTitle>
        <SavedVideosList>
          {links.map((link) => (
            <SavedVideoItem key={link.id}>
              <LinkItem to={link.url}>{link.title}</LinkItem>
              <IconButton onClick={() => alert("Hi")}>
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
