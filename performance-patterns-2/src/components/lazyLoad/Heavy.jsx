import { useMemo } from "react";

console.log("[Heavy] module evaluated");

const generateBigdata = (count = 200000) => {
  //simulate heavy CPU work and big data(but keep it synchronous for demonstration)
  const arr = new Array(count);

  for (let i = 0; i < count; i++) {
    arr[i] = `user-${i}-${Math.random().toString(36).slice(2, 9)}`;
    console.log(arr);
  }

  return arr;
};

export default function Heavy() {
  // useMemo to avoid regenerating every render, but module eval is the heavy part
  const data = useMemo(() => {
    console.log("[Heavy] generating big data [expensive]");
    return generateBigdata(20000); //adjust number for your machine
  }, []);

  return (
    <div className="p-10">
      <h2>Heavy Component</h2>
      <p>Loaded heavy length: {data.length}</p>
      <small>Check console: module evaluated and data generation logs.</small>
    </div>
  );
}
