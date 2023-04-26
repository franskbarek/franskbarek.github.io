import { Link } from "react-router-dom";
import swal from "sweetalert";
import photoProfile from "../../assets/image/photo-profile.jpg";
import "./introduction.css";

function infoHandle() {
  swal("franzferdinand.kbarek@gmail.com", {
    button: false,
    className: "infoTamb",
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
        <p className="text-intro">Salam kenal, saya susah diam, biasanya berpikir, menulis atau buat sesuatu.</p>
      </div>
      <div className="horizontal-line">
        <hr />
      </div>
      <div className="nav-container">
        <ul className="list-items">
          <li className="list">
            <Link to="projects" className="link">
              🛠️ Daftar kerjaan/karya
            </Link>
          </li>
          <li className="list">
            <Link to="writes-group" className="link">
              📝 Tulisan saya
            </Link>
          </li>
          <li className="list" title="Informasi tambahan">
            <Link className="link" onClick={infoHandle}>
              🖇 Kontak
            </Link>
          </li>
          <li className="list" title="link">
            <Link className="link" to="https://franskbarek.vercel.app">
              🚀 Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
