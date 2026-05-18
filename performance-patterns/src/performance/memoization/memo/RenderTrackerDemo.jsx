import { useState } from "react";
import RenderTracker from "./RenderTracker";
import MemoizedCard from "./ProfileCard";

export const RenderTrackerDemo = () => {
  const [value, setValue] = useState("");

  return (
    <div className="p-2 border rounded">
      <RenderTracker />
      <input
        type="text"
        className="border rounded p-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedCard name="Sanjib" />
    </div>
  );
};
