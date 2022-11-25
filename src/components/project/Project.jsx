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
        const res = await axios.get(process.env.REACT_APP_BASE_URL_PROJECTS);
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
          <div className="project-item" key={project._id}>
            <h3 className="project-subheadingTitle">{project.title}</h3>
            <img className="project-image" src={project.photo} alt="img" />
            <p className="project-desc">
              {project.desc} <i className="linkYellow">{project.createdAt.split("").splice(0, 10)}</i>
            </p>
            <span className="project-wrapLink">
              {!project.code_link ? (
                <a className="project-link link" href={project.site_link} target="{_blank}">
                  Demo
                </a>
              ) : !project.site_link ? (
                <a className="project-link link" href={project.code_link} target="{_blank}">
                  Dokumentasi
                </a>
              ) : (
                <span className="project-wrapLink">
                  <a className="project-link link" href={project.site_link} target="{_blank}">
                    Demo
                  </a>
                  <a className="project-link linkYellow" href={project.code_link} target="{_blank}">
                    Dokumentasi
                  </a>
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
