import { useEffect, useState } from "react";
import { useThrottle } from "./hooks/useThrottle";

export default function SetScrollTracker({ scrollContent }) {
  const [scrollY, setScrollY] = useState(0);
  const throttledY = useThrottle(scrollY, 4000);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(scrollContent.scrollY);
      console.log(scrollY);
    };

    scrollContent.addEventListener("scroll", handleScroll);

    return () => scrollContent.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed border h-30 mt-3 p-1 bg-amber-700/50">
      <h2 className="text-xl">Scroll position (throttled)</h2>
      <p>{throttledY}</p>
    </div>
  );
}
