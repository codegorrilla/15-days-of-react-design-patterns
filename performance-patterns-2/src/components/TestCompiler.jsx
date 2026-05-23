import { useState } from "react";

const TestCompiler = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="border rounded-xl bg-black text-white text-center p-3"
      onClick={() => setCount(count + 1)}
    >
      Clicked {count} times!
    </button>
  );
};

export default TestCompiler;
