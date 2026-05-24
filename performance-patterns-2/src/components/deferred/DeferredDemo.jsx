import { useDeferredValue, useMemo, useState } from "react";

const createLargeList = (count = 500) => {
  const array = new Array(count);
  for (let i = 0; i < count; i++) {
    array[i] = `Product ${i} - ${Math.random().toString(36).slice(2, 6)}`;
  }
  return array;
};

const PRODUCTS = createLargeList(1000);

function ProductList({ filter }) {
  const filtered = useMemo(() => {
    console.log("Products filtering for:", filter);

    return PRODUCTS.filter((p) =>
      p.toLowerCase().includes(filter.toLowerCase()),
    ).slice(0, 200);
  }, [filter]);

  return (
    <div style={{ maxHeight: 300, overflow: "auto", border: "1px solid #ddd" }}>
      {filtered.map((p, i) => (
        <div key={i} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
          {p}
        </div>
      ))}
    </div>
  );
}

export default function DeferredDemo() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div className="p-20">
      <h2>useDeferredValue Demo (Deferred heavy updates)</h2>

      <div className="mb-10">
        <input
          type="text"
          className="w-100 border p-8 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to filter (UI remains intact because heavy filtering is deferred)"
        />
        <span className="ml-12">
          {text === deferredText
            ? "Results up-to-date"
            : "Results are deferred"}
        </span>
      </div>
      <ProductList filter={deferredText} />
    </div>
  );
}
