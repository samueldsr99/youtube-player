import { Outlet } from "react-router";

import Sidebar from "./components/sidebar";
import { Main, Root } from "./outlet.styles";

export default function IndexOutlet() {
  return (
    <Root>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Root>
  );
}
