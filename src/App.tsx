import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import queryClient from "./lib/config/queryclient.config";
import { theme } from "./ui/theme";
import { GlobalStyles } from "./ui/theme/global-styles";
import router from "./router";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}
