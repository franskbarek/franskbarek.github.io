import { Link } from "react-router-dom";
import swal from "sweetalert";
import photoProfile from "../../assets/image/photo-profile.jpg";
import "./introduction.css";

function infoHandle() {
  swal("franzferdinand.kbarek@gmail.com", {
    button: false,
  });
}

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="header-container">
        <h1 className="intro-heading">
          Halo, saya Frans
          <a className="link-franskbarek linkYellow" href="https://github.com/franskbarek" target="{_blank}">
            (@franskbarek)
          </a>
        </h1>
      </div>
      <div className="image-container">
        <img src={photoProfile} alt="photoProfile" className="img-thumbnail" title="fraka" />
        <p className="text-intro">Salam kenal, saya susah diam, biasanya berpikir, menulis atau buat sesuatu. senang rasanya bisa berbagi.</p>
      </div>
      <div className="nav-container">
        <ul className="list-items">
          <li className="list">
            <Link to="projects" className="link">
              🛠️ Daftar kerjaan/karya.
            </Link>
          </li>
          <li className="list">
            <Link to="writes" className="link">
              📝 Tulisan saya.
            </Link>
          </li>
          <li className="list link" title="Informasi tambahan">
            <p style={{ cursor: "pointer" }} onClick={infoHandle}>
              🖇 Informasi tambahan.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
