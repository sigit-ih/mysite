import '../../stylesheet.css';
import '../../responsive.css';

function Certificate() {
  return (
    <section className="certificate">
      <div className="container">
        <div className="heading">
          <h3>Sertifikat</h3>
        </div>
        <table>
          <tr>
            <td rowspan="3"><img src="#" /></td>
            <td>Pelatihan Pengantar Frontend (2023)</td>
          </tr>
          <tr>
            <td>oleh Kominfo dan Progate</td>
          </tr>
          <tr>
            <td><span className="btn cert">Lihat Sertifikat</span></td>
          </tr>
          <tr>
            <td rowspan="3"><img src="#" /></td>
            <td>Pelatihan Backend menggunakan Go Language (2022)</td>
          </tr>
          <tr>
            <td>oleh Edspert</td>
          </tr>
          <tr>
            <td><span className="btn cert">Lihat Sertifikat</span></td>
          </tr>
          <tr>
            <td rowspan="3"><img src="#" /></td>
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