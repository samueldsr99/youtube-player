import { useRef } from "react";
import { Outlet, useNavigate } from "react-router";

import NavbarDropdown from "./components/navbar-dropdown/navbar-dropdown";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import SearchInput from "./components/search-input/search-input";
import Sidebar from "./components/sidebar";
import { Content, Header, Main, Root } from "./outlet.styles";

export default function IndexOutlet() {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <Root>
      <Sidebar />
      <Main ref={mainRef}>
        <Header>
          <SearchInput onSearch={(q) => navigate({ pathname: "/", search: q ? `?q=${q}` : "" })} />
          <NavbarDropdown />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <ScrollToTop targetRef={mainRef} />
      </Main>
    </Root>
  );
}
