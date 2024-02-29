import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
const IndexPage = lazy(() => import("./app/page"));
const WatchPage = lazy(() => import("./app/watch/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/watch/:videoId",
    element: <WatchPage />,
  },
]);

export default router;
