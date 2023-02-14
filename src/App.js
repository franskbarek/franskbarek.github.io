import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
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
import NotFoundPage from "./utils/NotFoundPage";

function App() {
  return (
    <div className="app">
      {/* #1 */}
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      {/* #2 */}
      <HashRouter>
        {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="projects" element={<Projects />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route exact path="writes-group">
            <Route index element={<WritesGroup />} />
            <Route path="general" element={<WritesGeneral />} />
            <Route path="general/:id" element={<SinglePage />} />
            <Route path="tech-general" element={<WritesTechGeneral />} />
            <Route path="tech-general/:id" element={<SinglePageTechGeneral />} />
            <Route path="tech-programming" element={<WritesTechProgramming />} />
            <Route path="tech-programming/:id" element={<SinglePageTechProgramming />} />
          </Route>
        </Routes>
        {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
}

export default App;
