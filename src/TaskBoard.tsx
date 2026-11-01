import { useEffect, useState } from "react";
import type { Task } from "./schemas";
import { simulateFetchTasks } from "./mockApi";
import TaskList from "./TaskList";

function TaskBoard() {
  const [status, setStatus] = useState<
    "loading" | "success" | "empty" | "error"
  >("loading");
  const [tasks, setTasks] = useState<Task[]>([]);

 function loadTasks() {
    setStatus("loading");
    simulateFetchTasks()
      .then((data) => {
        setTasks(data);
        setStatus(data.length === 0 ? "empty" : "success");
      })
      .catch(() => setStatus("error"));
  }

  useEffect(() => {
    loadTasks();
  }, []);

if (status === "loading") return <p>Loading tasks...</p>;
  if (status === "error")
    return (
      <div>
        <p>We couldn't load your tasks.</p>
        <button onClick={loadTasks}>Try again</button>
      </div>
    );
  if (status === "empty") return <p>No tasks yet. Add your first one below.</p>;
  return <TaskList tasks={tasks} />;
}

export default TaskBoard;
