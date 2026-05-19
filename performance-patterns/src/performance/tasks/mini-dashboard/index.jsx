import React from "react";
import Searchbox from "./Searchbox";
import UsersSorting from "./UsersSorting";

const MiniDashboard = () => {
  return (
    <div className="container flex flex-col p-4">
      <h2 className="p-1 rounded bg-amber-800 text-white">Mini Dashboard</h2>
      <Searchbox />
      <UsersSorting />
    </div>
  );
};

export default MiniDashboard;
