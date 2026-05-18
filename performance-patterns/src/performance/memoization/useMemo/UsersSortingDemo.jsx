import { useState } from "react";
import { Users } from "./Users";
import { getUsers } from "../../../utils";

export default function UsersSortingDemo() {
  const [count, setCount] = useState(0);
  const [users] = useState(() => getUsers()); //assume it returns 10,000 users

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Users list={users} />
    </>
  );
}
