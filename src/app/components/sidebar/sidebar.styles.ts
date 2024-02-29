import { Link } from "react-router-dom";
import { styled } from "styled-components";

import BaseHomeIcon from "@/ui/icons/home-icon";
import BaseXIcon from "@/ui/icons/x-icon";
import BaseYoutubeIcon from "@/ui/icons/youtube-icon";

export const Aside = styled.aside`
  padding: ${({ theme }) => theme.spacing(6, 4)};
  width: ${({ theme }) => theme.spacing(60)};
  display: flex;
  flex-direction: column;
`;

export const HomeLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  place-self: center;
`;

export const YoutubeIcon = styled(BaseYoutubeIcon)`
  width: ${({ theme }) => theme.spacing(22.5)};
  height: ${({ theme }) => theme.spacing(5)};
`;

export const HomeIcon = styled(BaseHomeIcon)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;

export const NavigationLinks = styled.nav`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const SavedVideosContainer = styled.div``;

export const SavedVideosTitle = styled.h3`
  ${({ theme }) => theme.typography.variants.h3};
  margin: 0;
`;

export const SavedVideosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SavedVideoItem = styled.li`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const LinkItem = styled(Link)`
  ${({ theme }) => theme.typography.variants.body1};

  padding: ${({ theme }) => theme.spacing(3, 8, 3, 3)};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  display: block;

  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  ${({ theme }) => theme.mixins.textEllipsis};
`;

export const Divider = styled.hr`
  margin: ${({ theme }) => theme.spacing(3, 0)};
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

type NavigationLinkItemProps = {
  $isActive: boolean;
};

export const NavigationLinkItem = styled(LinkItem)<NavigationLinkItemProps>`
  ${({ theme }) => theme.typography.variants.body1};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gray[200] : "transparent"};
`;

export const IconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing(3)};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

export const XIcon = styled(BaseXIcon)`
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
`;
