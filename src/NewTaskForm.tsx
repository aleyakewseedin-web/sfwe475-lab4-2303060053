import { useState } from "react";
import { CreateTaskSchema } from "./schemas";
import type { CreateTaskInput } from "./schemas";

function NewTaskForm({ onAddTask }: { onAddTask: (data: CreateTaskInput) => void }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("open");
  const [errors, setErrors] = useState<Record<string, string[]>>({}); 

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = CreateTaskSchema.safeParse({ title, dueDate, status });
if (!result.success) {
  console.log(result.error.issues);
}    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    onAddTask(result.data);
    setTitle("");
    setDueDate("");
    setStatus("open");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p style={{ color: "red" }}>{errors.title[0]}</p>}
      </div>
      <div>
        <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        {errors.dueDate && <p style={{ color: "red" }}>{errors.dueDate[0]}</p>}
      </div>
      <div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">Open</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
