import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="flex gap-5">
      <h2 className="text-2xl">Count:{count}</h2>
      <button
        className="bg-purple-500 text-white p-1 border rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
