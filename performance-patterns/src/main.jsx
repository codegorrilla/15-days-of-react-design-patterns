import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Task from "./performance/tasks/Task";
import MiniDashboard from "./performance/tasks/mini-dashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task />
    <MiniDashboard />
  </StrictMode>,
);
