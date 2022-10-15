import { Link } from "react-router-dom";
import Write from "../../components/write/Write";
import "./writes.css";

export default function Writes() {
  return (
    <>
      <div className="writes">
        <Link to="/" className="writes-linkPath">
          <p className="writes-headingTitle linkYellow">{"👏🏽"}</p>
        </Link>
        <Write />
      </div>
    </>
  );
}
