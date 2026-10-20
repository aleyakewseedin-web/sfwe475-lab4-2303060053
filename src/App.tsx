import TaskCard from "./TaskCard";
import TaskList from "./TaskList";
import NewTaskInput from "./NewTaskInput";
function App() {
 return (
    <div>
      <TaskCard title="Buy groceries" done={false}  dueDate="2026-11-01" />
      <TaskCard title="Finish homework" done={true} />
      <TaskList />
      <NewTaskInput/>
    </div>
  );
}
export default App;