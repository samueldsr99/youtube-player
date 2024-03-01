import { LoaderFunction } from "react-router";
import { QueryClient } from "@tanstack/react-query";

export type RQLoaderFn = (queryClient: QueryClient) => LoaderFunction;
