import { memo, useMemo } from "react";

export const Users = memo(({ list }) => {
  console.log("Users list rendered");

  const sorted = useMemo(() => {
    console.log("Sorting expensive list...");

    return [...list].sort((a, b) => a.localeCompare(b));
  }, [list]);

  return (
    <>
      <h2 className="mt-2 text-black">Sorted Users</h2>
      {sorted.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </>
  );
});
