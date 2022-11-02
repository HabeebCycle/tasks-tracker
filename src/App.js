import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./context/tasks";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
}

export default App;
