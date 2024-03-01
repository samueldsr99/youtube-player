import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ targetRef }: { targetRef: React.RefObject<HTMLDivElement> }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    targetRef.current?.scrollTo(0, 0);
  }, [pathname, targetRef]);

  return <></>;
};

export default ScrollToTop;
