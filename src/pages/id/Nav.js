import '../../stylesheet.css';
import '../../responsive.css';

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-up">
          <div className="dark-mode">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="nav-down">
          <a href="#biodata">Biodata</a>
          <a href="#profile">Profil</a>
          <a href="#education">Pendidikan</a>
          <a href="#skill">Keahlian</a>
          <a href="#certificate">Sertifikat</a>
          <a id="prjct" href="#projects">Hasil Karya</a>
          <a href="#contact">Kontak Saya</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;