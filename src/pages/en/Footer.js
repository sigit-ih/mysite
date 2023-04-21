import '../../stylesheet.css';
import '../../responsive.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="container">
        {/* 
        <div class="footer-left">
          <img src="#">
        </div>
        <div class="footer-right">
          <a href="#">Biodata</a>
          <a href="#">Profil</a>
          <a href="#">Pendidikan</a>
          <a href="#">Keahlian</a>
          <a href="#">Sertifikat</a>
          <a href="#">Hasil Karya</a>
          <a href="#">Kontak Saya</a>
        </div>
        */}
        <div class="copyright">
          <p>{year} @ Sigit Ispramono Hadi</p>
        </div>
      </div>
    </footer>      
  );
}

export default Footer;