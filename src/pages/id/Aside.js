import '../../stylesheet.css';
import '../../responsive.css';

function Aside() {
  return (
    <aside>
      <div className="container">
        <div className="aside-up">
          <div className="dark-mode">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="photo">
          <a href="#root">
            <img src={require("../../assets/4x6.jpg")} alt="Sigit"/>
          </a>
        </div>
        <div className="aside-down">
          <a href="#biodata">Biodata</a>
          <a href="#profile">Profil</a>
          <a href="#education">Pendidikan</a>
          <a href="#skill">Keahlian</a>
          <a href="#certificate">Sertifikat</a>
          <a id="prjct" href="#projects">Hasil Karya</a>
          <a href="#contact">Kontak Saya</a>
        </div>
      </div>
    </aside>
  );
}

export default Aside;