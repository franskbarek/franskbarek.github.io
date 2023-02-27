import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import SkeletonLoading from "../../utils/SkeletonLoading";
import "./project.css";

export default function Project() {
  const { projects, loading } = useContext(ProjectContext);

  if (loading) {
    return <SkeletonLoading />;
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
