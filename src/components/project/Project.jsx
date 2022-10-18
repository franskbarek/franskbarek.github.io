import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./project.css";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://franskbarek-page-api.cyclic.app/backend/projects");
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="project-headTitle">Daftar kerjaan/karya</h2>
      <div className="project">
        {projects.map((project) => (
          <div className="project-item">
            <h3 className="project-subheadingTitle" key={project.id}>
              {project.title}
            </h3>
            <img className="project-image" src={project.photo} alt="img" />
            <p className="project-desc">
              {project.desc} <i className="linkYellow">{project.createdAt}</i>
            </p>
            <span className="project-wrapLink">
              {project.site_link ? (
                <a className="project-link link" href={project.site_link} target="{_blank}">
                  see live
                </a>
              ) : (
                // <span className="project-wrapLink">
                //   </span>
                <a className="project-link link" href={project.code_link} target="{_blank}">
                  source code
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
