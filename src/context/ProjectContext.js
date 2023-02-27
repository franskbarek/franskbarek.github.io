import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_BASE_URL_PROJECTS);
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return <ProjectContext.Provider value={{ projects, loading }}>{children}</ProjectContext.Provider>;
};
