import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { TaskProvider } from "./context/tasks";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <Header />
        <AddTask />
      </div>
    </TaskProvider>
  );
}

export default App;
