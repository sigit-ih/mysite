import '../../../stylesheet.css';
import '../../../responsive.css';

function Certificate() {
  return (
    <section id="certificate">
      <div className="container">
        <div className="heading">
          <h3>Sertifikat</h3>
        </div>
        <table>
          <tr>
            <td>Pelatihan Pengantar Frontend (2023)</td>
          </tr>
          <tr>
            <td>oleh Kominfo dan Progate</td>
          </tr>
          <tr>
            <td><span className="btn cert">Lihat Sertifikat</span></td>
          </tr>
          <tr>
            <td>Pelatihan Backend menggunakan Go Language (2022)</td>
          </tr>
          <tr>
            <td>oleh Edspert</td>
          </tr>
          <tr>
            <td><span className="btn cert">Lihat Sertifikat</span></td>
          </tr>
          <tr>
            <td>Pelatihan Data Analitik (2022)</td>
          </tr>
          <tr>
            <td>oleh Kominfo dan Google</td>
          </tr>
          <tr>
            <td><span className="btn cert">Lihat Sertifikat</span></td>
          </tr>
        </table>
      </div>  
    </section>
  );
}

export default Certificate;