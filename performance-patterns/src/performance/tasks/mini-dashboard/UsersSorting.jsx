import { useState } from "react";
import { getUsers } from "./utils";
import { Users } from "./Users";

export default function UsersSorting() {
  const [users] = useState(() => getUsers());

  return (
    <>
      <Users list={users} />
    </>
  );
}
