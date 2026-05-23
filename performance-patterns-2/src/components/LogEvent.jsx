import { useState } from "react";

const LogEvent = () => {
  const [count, setCount] = useState(0);

  const handleClick = (c) => {
    console.log("You've clicked me");
    setCount(c + 1);
  };
  return (
    <button
      className="border rounded-xl p-2 text-black text-center"
      onClick={() => handleClick(count)}
    >
      LogEvent {count}
      {console.log("Component rendering")}
    </button>
  );
};

export default LogEvent;
