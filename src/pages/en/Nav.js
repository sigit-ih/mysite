import '../../stylesheet.css';
import '../../responsive.css';

function Nav() {
  return (
    <nav>
      <div class="container">
        <div class="nav-left">
          <span>SIGIT ISPRAMONO HADI</span>
        </div>
        <div class="nav-right">
          <a href="biodata">Biodata</a>
          <a href="profile">Profil</a>
          <a href="education">Pendidikan</a>
          <a href="skill">Keahlian</a>
          <a href="certificate">Sertifikat</a>
          <a href="works">Hasil Karya</a>
          <a href="contact">Kontak Saya</a>
        </div>
      </div>
    </nav>
  );
}
  
export default Nav;