import { Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import WritesGroup from "./pages/writes/writesGroup/WritesGroup";
import WritesGeneral from "./pages/writes/type_general/WritesGeneral";
import WritesTechGeneral from "./pages/writes/type_tech/WritesTechGeneral";
import WritesTechProgramming from "./pages/writes/type_tech/WritesTechProgramming";
import SinglePage from "./pages/writes/singlePage/SinglePage";
import SinglePageTechGeneral from "./pages/writes/singlePage/SinglePageTechGeneral";
import SinglePageTechProgramming from "./pages/writes/singlePage/SinglePageTechProgramming";
import NotFoundPage from "./utils/NotFoundPage";
import { ProjectsProvider } from "./context/ProjectsContext";
import { WritesGeneralContainerProvider } from "./context/WritesGeneralContainerContext";
import { WriteGeneralSinglePageProvider } from "./context/WriteGeneralSinglePageContext";
import { WriteTechGeneralSinglePageProvider } from "./context/WriteTechGeneralSinglePageContext";
import { WriteTechProgrammingSinglePageProvider } from "./context/WriteTechProgrammingSinglePageContext";
import { WritesTechGeneralContainerProvider } from "./context/WritesTechGeneralContainerContext";
import { WritesTechProgrammingContainerProvider } from "./context/WritesTechProgrammingContainerContext";
import "./app.css";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <ProjectsProvider>
          <WritesGeneralContainerProvider>
            <WriteGeneralSinglePageProvider>
              <WriteTechGeneralSinglePageProvider>
                <WriteTechProgrammingSinglePageProvider>
                  <WritesTechGeneralContainerProvider>
                    <WritesTechProgrammingContainerProvider>
                      <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="projects" element={<Projects />} />
                        <Route exact path="writes-group">
                          <Route index element={<WritesGroup />} />
                          <Route path="general" element={<WritesGeneral />} />
                          <Route path="general/:id" element={<SinglePage />} />
                          <Route path="tech-general" element={<WritesTechGeneral />} />
                          <Route path="tech-general/:id" element={<SinglePageTechGeneral />} />
                          <Route path="tech-programming" element={<WritesTechProgramming />} />
                          <Route path="tech-programming/:id" element={<SinglePageTechProgramming />} />
                        </Route>
                        <Route exact path="*" element={<NotFoundPage />} />
                      </Routes>
                    </WritesTechProgrammingContainerProvider>
                  </WritesTechGeneralContainerProvider>
                </WriteTechProgrammingSinglePageProvider>
              </WriteTechGeneralSinglePageProvider>
            </WriteGeneralSinglePageProvider>
          </WritesGeneralContainerProvider>
        </ProjectsProvider>
      </HashRouter>
    </div>
  );
}

export default App;
