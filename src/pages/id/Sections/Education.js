import '../../../stylesheet.css';
import '../../../responsive.css';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="heading">
          <h3>Pendidikan</h3>
        </div>
        <table>
          <tr>
            <td class="table-logo" rowspan="3"><img src={require("../../../assets/logo-upnvj.png")} alt="UPNVJ" /></td>
            <td>S1 - Informatika</td>
          </tr>
          <tr>
            <td>Universitas Pembangunan Nasional Veteran Jakarta (2015 - 2022)</td>
          </tr>
          <tr>
            <td>IPK : 3.71</td>
          </tr>
          <tr>
            <td class="table-logo" rowspan="3"><img src={require("../../../assets/logo-smkn26.png")} alt="SMKN26" /></td>
            <td>Teknik Komputer Jaringan</td>
          </tr>
          <tr>
            <td>SMK Negeri 26 Jakarta Timur (2011 - 2015)</td>
          </tr>
          <tr>
            <td> </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default Education;