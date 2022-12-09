import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import WritesGroup from "./pages/writes/writesGroup/WritesGroup";
import WritesTech from "./pages/writes/type_Tech/WritesTech";
import "./app.css";
import SinglePage from "./pages/writes/singlePage/SinglePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="writes-group" element={<WritesGroup />} />
          <Route path="writes-group/tech" element={<WritesTech />} />
          <Route path="writes-group/tech/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
