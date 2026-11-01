import { useEffect, useState } from "react";
import type { Task,CreateTaskInput } from "./schemas";
import { simulateFetchTasks } from "./mockApi";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";


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
  function handleAddTask(data: CreateTaskInput) {
    console.log("adding", data);
  setTasks([ 
    ...tasks,
    {
      id: Date.now(),
      title: data.title,
      dueDate: data.dueDate,
      done: data.status === "done",
      status: data.status,
    },
  ]);
  setStatus("success");
}

  if (status === "loading") return <p>Loading tasks...</p>;
  if (status === "error")
    return (
      <div>
        <p>We couldn't load your tasks.</p>
        <button onClick={loadTasks}>Try again</button>
      </div>
    );
  if (status === "empty")
    return (
      <div>
        <p>No tasks yet. Add your first one below.</p>
        <NewTaskForm onAddTask={handleAddTask} />
      </div>
    );
  return (
    <div>
      <NewTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskBoard;