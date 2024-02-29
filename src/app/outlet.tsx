import { Outlet, useNavigate } from "react-router";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import SearchInput from "./components/search-input/search-input";
import Sidebar from "./components/sidebar";
import { Content, Main, Root } from "./outlet.styles";

export default function IndexOutlet() {
  const navigate = useNavigate();

  return (
    <Root>
      <Sidebar />
      <Main>
        <SearchInput onSearch={(q) => navigate({ pathname: "/", search: q ? `?q=${q}` : "" })} />
        <Content>
          <Outlet />
        </Content>
      </Main>

      <ScrollToTop />
    </Root>
  );
}
