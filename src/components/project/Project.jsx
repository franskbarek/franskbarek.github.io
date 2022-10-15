import bookshelf from "../../assets/image/bookshelf.jpg";
import todolist from "../../assets/image/todolist.jpg";
import "./project.css";

export default function Project() {
  return (
    <div className="project">
      <h2 className="project-headingTitle">Daftar Kerjaan/karya</h2>
      <div className="project-container">
        <div className="project-item bookshelf">
          <h3 className="project-subheadingTitle">🗃️ Bookshelf-apps</h3>
          <img className="project-image featureImage" src={bookshelf} alt="bookshelf" />
          <p className="project-desc">
            Tech: Vanilla Javascript. <i className="linkYellow">13-Okt-2022</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://bookshelffunny-apps.netlify.app/" target="{_blank}">
              see live
            </a>
          </span>
        </div>
        <div className="project-item todolist">
          <h3 className="project-subheadingTitle">📝 Todo List</h3>
          <img className="project-image featureImage" src={todolist} alt="todolist" />
          <p className="project-desc">
            Tech: Vanilla Javascript. <i className="linkYellow">30-Sep-2022</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://todofunny-list.netlify.app/" target="{_blank}">
              see live
            </a>
          </span>
        </div>
        <div className="project-item manbri">
          <h3 className="project-subheadingTitle">📚 manbri.com (web blog application)</h3>
          <img className="project-image" src="https://images.cakeresume.com/WQ0aL/cv.franskbarek/ba3f837c-7c41-42d0-adb7-48c585d9e297.png" alt="manbri.com" />
          <p className="project-desc">
            Tech stack React, Express, Mongodb, production : Netlify (frontend) and Cyclic (backend). <i className="linkYellow">14-Sep-2022</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://manbri.netlify.app" target="{_blank}">
              see live
            </a>
          </span>
        </div>
        <div className="project-item yhkmovies">
          <h3 className="project-subheadingTitle">📺 yhkmovies.com (web application)</h3>
          <img className="project-image" src="https://images.cakeresume.com/WQ0aL/franz-ferdinand-kbarek/b556b04f-43d3-4748-b433-59644473824a.png" alt="yhkmovies.com" />
          <p className="project-desc">
            Movies collection Website Application (share and watch movies via LAN). Tech stack React, Express, Mongodb. <i className="linkYellow">22-Jul-2022</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://gitlab.com/franskbarek/netflix/-/tree/client" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item tradatoko">
          <h3 className="project-subheadingTitle">🛒 tradatoko.com (mern stack)</h3>
          <img className="project-image" src="https://images.cakeresume.com/WQ0aL/franz-ferdinand-kbarek/9001db16-d981-4126-90f0-7b21cce88861.jpeg" alt="" />
          <p className="project-desc">
            Tech stack React, Redux, Express, Mongodb, Firebase. <i className="linkYellow">23-Sep-2021</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://github.com/franskbarek/ecommerce-ui/tree/main/src" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item ecommerce">
          <h3 className="project-subheadingTitle">⚙️ Ecommerce RestfulAPI</h3>
          <img className="project-image" src="https://images.cakeresume.com/WQ0aL/franz-ferdinand-kbarek/c76878b8-90f5-4dcb-bf96-39748f5c2927.jpeg" alt="" />
          <p className="project-desc">
            Tech stack Express, CryptoJs, JWT, Payment gateway (stripe). <i className="linkYellow">14-Sep-2021</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://github.com/franskbarek/ecommerce-restapi" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item tradatoko">
          <h3 className="project-subheadingTitle">[ ◉¯] Face Recognition</h3>
          <img
            className="project-image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.us8kQFzwkHd5HVzyTjwrhwHaDZ%26pid%3DApi&f=1&ipt=631f5a50c9c65f22c1b9f9d7e98513cef08026d85fcc280ce918b8c3f03d5bb9&ipo=images"
            alt=""
          />
          <p className="project-desc">
            Tech stack ReactJs, Clarifai API, PostgreSQL. <i className="linkYellow">13-Okt-2020</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://github.com/franskbarek/face-recognitionbrain" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item ecommerce">
          <h3 className="project-subheadingTitle">⚙️ Bookshelf RestfulAPI</h3>
          <img className="project-image" src="https://images.cakeresume.com/WQ0aL/franz-ferdinand-kbarek/c76878b8-90f5-4dcb-bf96-39748f5c2927.jpeg" alt="" />
          <p className="project-desc">
            Tech: Hapi.js. <i className="linkYellow">21-Jun-2022</i>
          </p>
          <span className="project-wrapList">
            <a className="project-link link" href="https://github.com/franskbarek/bookshelf-restful-api" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item awesomemovies">
          <h3 className="project-subheadingTitle">🎬 Awesome Movies Searching</h3>
          <img className="project-image" src="https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="awesome movies search" />
          <p className="project-desc">
            Tech stack ReactJs, ImdbAPI. <i className="linkYellow">30-Jan-2021</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://franskbarek.github.io/search-movies/" target="{_blank}">
              see live
            </a>
          </span>
        </div>
        <div className="project-item robochars">
          <h3 className="project-subheadingTitle">🔍 Form Robochars Searching</h3>
          <img className="project-image" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="robo chars" />
          <p className="project-desc">
            Tech stack ReactJs, Robofriend API. <i className="linkYellow">24-Jul-2020</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://franskbarek.github.io/robofriends/" target="{_blank}">
              see live
            </a>
          </span>
        </div>
        <div className="project-item dataidentitas">
          <h3 className="project-subheadingTitle">🆔 Aplikasi CRUD (Create Read Update Delete) Pengelolaan Data Identitas</h3>
          <img className="project-image" src="https://images.unsplash.com/photo-1623265300797-4a3541e29a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="data identitas" />
          <p className="project-desc">
            Tech stack Nodejs, ExpressJs, MongoDB. <i className="linkYellow">22-Apr-2020</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://github.com/franskbarek/" target="{_blank}">
              source code
            </a>
          </span>
        </div>
        <div className="project-item stokbarang">
          <h3 className="project-subheadingTitle">📊 Aplikasi Data Stok Produk (Stok barang gudang)</h3>
          <img
            className="project-image"
            src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhdGlzdGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="stok barang"
          />
          <p className="project-desc">
            Tech stack Nodejs, ExpressJS, PostgreSQL. <i className="linkYellow">10-Feb-2020</i>
          </p>
          <span className="project-wrapLink">
            <a className="project-link link" href="https://github.com/franskbarek/" target="{_blank}">
              source code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
