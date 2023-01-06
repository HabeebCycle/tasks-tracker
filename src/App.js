import Home from "./components/Home";
import { TaskProvider } from "./context/tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
