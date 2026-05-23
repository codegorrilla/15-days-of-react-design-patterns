import React, { Suspense, useState } from "react";
import Light from "./Light";

const Heavy = React.lazy(() => import("./Heavy"));

const LazyLoader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-20">
      <h1>Lazy Demo</h1>
      <p>
        Heavy component is loaded on-demand via <code>React.lazy()</code>.
      </p>
      <Light />

      <button onClick={() => setShow((show) => !show)} className="m-10">
        {show ? "Hide Heavy" : "Show Heavy"}
      </button>
      <Suspense
        fallback={<div className="p-20">Loading Heavy Component...</div>}
      >
        {show && <Heavy />}
      </Suspense>
    </div>
  );
};

export default LazyLoader;
