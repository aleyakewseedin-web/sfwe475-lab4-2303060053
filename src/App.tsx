import TaskCard from "./TaskCard";
import TaskBoard from "./TaskBoard";
function App() {
 return (
    <div>
      <TaskCard title="Buy groceries" done={false}  dueDate="2026-11-01" />
      <TaskCard title="Finish homework" done={true} />
      <TaskBoard />
    </div>
  );
}
export default App;