import Home from "./components/Home";
import { TaskProvider } from "./context/tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Login from "./components/page/Login";
import Register from "./components/page/Register";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="container">
          <h1>Task Tracker</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
