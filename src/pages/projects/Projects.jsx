import { Link } from "react-router-dom";
import Project from "../../components/project/Project";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <Link to="/" className="projects-linkPath">
        <p className="projects-headingTitle linkYellow">{"👏🏽"}</p>
      </Link>
      <Project />
    </div>
  );
}
