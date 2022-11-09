import Header from "./components/Header";
import Home from "./components/Home";
import { TaskProvider } from "./context/tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
