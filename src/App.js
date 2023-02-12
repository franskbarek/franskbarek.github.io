import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import WritesGroup from "./pages/writes/writesGroup/WritesGroup";
import WritesGeneral from "./pages/writes/type_general/WritesGeneral";
import WritesTechGeneral from "./pages/writes/type_tech/WritesTechGeneral";
import WritesTechProgramming from "./pages/writes/type_tech/WritesTechProgramming";
import "./app.css";
import SinglePage from "./pages/writes/singlePage/SinglePage";
import SinglePageTechGeneral from "./pages/writes/singlePage/SinglePageTechGeneral";
import SinglePageTechProgramming from "./pages/writes/singlePage/SinglePageTechProgramming";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="writes-group" element={<WritesGroup />} />
          <Route path="writes-group/general" element={<WritesGeneral />} />
          <Route path="writes-group/general/:id" element={<SinglePage />} />
          <Route path="writes-group/tech-general/" element={<WritesTechGeneral />} />
          <Route path="writes-group/tech-general/:id" element={<SinglePageTechGeneral />} />
          <Route path="writes-group/tech-programming" element={<WritesTechProgramming />} />
          <Route path="writes-group/tech-programming/:id" element={<SinglePageTechProgramming />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
