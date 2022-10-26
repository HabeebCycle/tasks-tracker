import { TaskProvider } from "./context/tasks";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Tracker</h1>
      </div>
    </TaskProvider>
  );
}

export default App;
