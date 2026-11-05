import { useState } from "react";
import type { Task } from "./schemas";

type TaskCardProps = Pick<Task, "id" | "title" | "done"> & {
  dueDate?: string;
  onToggle: (id: number) => void;  
};

function TaskCard({ id, title, done: initialDone, dueDate, onToggle }: TaskCardProps) {
 const [done, setDone] = useState(initialDone);
 return (
 <div className="task-card">
 <h3>{title}</h3>
 {dueDate && <p>Due: {dueDate}</p>}
 <input
 type="checkbox"
 aria-label={`Mark "${title}" as done`}
 checked={done}
 onChange={() => onToggle(id)}
 />
 </div>
 );
}
export default TaskCard;

