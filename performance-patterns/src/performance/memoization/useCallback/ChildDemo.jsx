import { useCallback, useState } from "react";
import ChildMemo from "./ChildMemo";

export default function ChildDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("I'm clicked");
  }, []);

  return (
    <div className="flex justify-center items-center gap-2 p-2">
      Count : {count}
      <button onClick={() => setCount(count + 1)}>Click me to increment</button>
      <ChildMemo onClick={handleClick} />
    </div>
  );
}
