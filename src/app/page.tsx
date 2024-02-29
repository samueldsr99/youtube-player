import { useQuery } from "@tanstack/react-query";

import services from "@/lib/api/services";
import querykeys from "@/lib/querykeys";

export default function IndexPage() {
  const { data: videos } = useQuery({
    queryKey: querykeys.youtube.search({}),
    queryFn: () => services.youtube.search({}),
  });

  console.log(videos);

  return <>Index page</>;
}
