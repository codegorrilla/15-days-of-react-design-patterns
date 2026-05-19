import { useState } from "react";

export default function DerivedState({ items }) {
  //const [filtered, setFiltered] = useState([]);

  //   useEffect(() => {
  //     setFiltered(items.filter((i) => i.active));
  //   }, [items]);

  return (
    <>
      <h2>Derived State</h2>
      {items.filter((item) => item.active)}
    </>
  );
}
