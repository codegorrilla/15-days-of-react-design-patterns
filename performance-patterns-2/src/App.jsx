import React from "react";
//import TestCompiler from "./components/TestCompiler";
//import LogEvent from "./components/LogEvent";
//import IsolatedDashboard from "./components/component-isolation/IsolatedDashboard";
//import VirtualizationDemo from "./components/virtualization/VirtualizationDemo";
// import NonLazyLoader from "./components/NonLazyLoader";
//import LazyLoader from "./components/LazyLoader";
//import VirtualList from "./components/virtualization/VirtualList";
import { users } from "./components/transition/util/fakeuser";
import UserFinderPriority from "./components/transition/UserFinderPriority";
import UserFinderTransition from "./components/transition/UserFinderTransition";

const App = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 mt-5 p-2">
      {/* <UserFinderPriority users={users} /> */}
      <UserFinderTransition users={users} />
    </div>
  );
};

export default App;
