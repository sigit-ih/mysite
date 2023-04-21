import '../../stylesheet.css';
import '../../responsive.css';

function Biodata() {
  return (
    <section className="biodata">
      <div className="container">
        <div className="heading">
          <h3>Biodata</h3>
        </div>
        <table>
          <tr>
            <td>Nama</td>
            <td>: Sigit Ispramono Hadi</td>
          </tr>
          <tr>
            <td>Jenis Kelamin</td>
            <td>: Laki-laki</td>
          </tr>
          <tr>
            <td>Tempat/Tanggal Lahir</td>
            <td>: Jakarta, 9 Juli 1996</td>
          </tr>
          <tr>
            <td>Kewarganegaraan</td>
            <td>: Indonesia</td>
          </tr>
          <tr>
            <td>Status Kawin</td>
            <td>: Belum Menikah</td>
          </tr>
          <tr>
            <td>Agama</td>
            <td>: Islam</td>
          </tr>
          <tr>
            <td>Domisili</td>
            <td>: Kab. Bekasi, Jawa Barat</td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default Biodata;