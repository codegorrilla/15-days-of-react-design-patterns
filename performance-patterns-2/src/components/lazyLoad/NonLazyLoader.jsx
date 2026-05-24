import React, { useState } from "react";
import Light from "./Light";
import Heavy from "./Heavy";

const NonLazyLoader = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-20">
      <h1>Non Lazy Demo</h1>
      <p>Heavy component is bundled with the app(non-lazy).</p>
      <Light />

      <button onClick={() => setShow((show) => !show)} className="m-10">
        {show ? "Hide Heavy" : "Show Heavy"}
      </button>
      {show && <Heavy />}
    </div>
  );
};

export default NonLazyLoader;
