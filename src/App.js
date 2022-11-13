import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import Writes from "./pages/writes/Writes";
import "./app.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="writes" element={<Writes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
