import { useRef } from "react";
export default function RenderTracker() {
  const renders = useRef(0);

  renders.current++;

  return <p>Rendered: {renders.current} times</p>;
}
