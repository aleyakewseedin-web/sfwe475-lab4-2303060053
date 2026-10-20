import TaskCard from "./TaskCard";
function App() {
 return (
    <div>
      <TaskCard title="Buy groceries" done={false} />
      <TaskCard title="Finish homework" done={true} />
    </div>
  );
}
export default App;