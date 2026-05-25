import { useRef, useState } from "react";

export default function CounterWithRef() {
  const counterRef = useRef(0); //persists between renders
  const [renderCount, setRenderCount] = useState(0); //for forcing re-renders

  const increment = () => {
    counterRef.current = counterRef.current + 1; //update ref
    console.log("Ref count:", counterRef.current);
  };

  return (
    <div className="flex justify-around w-full">
      <div>
        <h2 className="text-2xl">Ref count: {counterRef.current}</h2>
        <button
          className="bg-purple-500 text-white p-1 rounded"
          onClick={increment}
        >
          Increment Ref Count
        </button>
      </div>

      <div>
        <h2 className="text-2xl">Render count: {renderCount}</h2>
        <button
          className="bg-purple-500 rounded text-white p-1"
          onClick={() => setRenderCount(renderCount + 1)}
        >
          Force Re-render
        </button>
      </div>
    </div>
  );
}
