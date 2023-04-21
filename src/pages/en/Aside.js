import '../../stylesheet.css';
import '../../responsive.css';

function Aside() {
  return (
    <aside>
      <div className="container">
        <span></span>
        <div className="nav-right">
          <a href="biodata">Biodata</a>
          <a href="profile">Profil</a>
          <a href="education">Pendidikan</a>
          <a href="skill">Keahlian</a>
          <a href="certificate">Sertifikat</a>
          <a href="works">Hasil Karya</a>
          <a href="contact">Kontak Saya</a>
        </div>
      </div>
    </aside>
  );
}

export default Aside;