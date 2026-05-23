import { memo } from "react";

export const Item = memo(({ index, style, data }) => {
  const user = data[index];

  console.log("Render now: ", index);

  return (
    <div
      style={{ ...style, background: index % 2 ? "#fff" : "#fafafa" }}
      className="flex flex-col justify-center p-[8px, 12px] border-b border-solid border-amber-900"
    >
      <div className="font-bold">{user.name}</div>
      <div className="text-[12px] text-[#666]">{user.email}</div>
      <div className="text-[12px]">{user.bio}</div>
    </div>
  );
});
