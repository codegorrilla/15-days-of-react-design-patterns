import { useState } from "react";
import NonVirtualList from "./NonVirtuallList";
import { useFakeUsers } from "./data";
import VirtualList from "./VirtualList";

export default function VirtualizationDemo() {
  const users = useFakeUsers(500);
  const [mode, setMode] = useState("virtual");

  return (
    <div className="p-20">
      <h1>List Virtualization Demo</h1>

      <div className="mb-12">
        <button
          className="underline cursor-pointer"
          onClick={() => setMode("virtual")}
          disabled={mode === "virtual"}
        >
          Use Virtual List
        </button>
        <button
          className="underline cursor-pointer ml-2"
          onClick={() => setMode("non-virtual")}
          disabled={mode === "non-virtual"}
        >
          Use Non-Virtual List
        </button>
      </div>
      <h3 className="mb-8 text-black">
        Current Mode: <strong>{mode}</strong> - Users: {users.length}
      </h3>
      {mode === "virtual" ? <VirtualList /> : <NonVirtualList users={users} />}
    </div>
  );
}
