import '../../stylesheet.css';
import '../../responsive.css';

function Education() {
  return (
    <section className="education">
      <div className="container">
        <div className="heading">
          <h3>Pendidikan</h3>
        </div>
        <table>
          <tr>
            <td rowspan="3"><img src="#" /></td>
            <td>S1 - Informatika</td>
          </tr>
          <tr>
            <td>Universitas Pembangunan Nasional Veteran Jakarta (2015 - 2022)</td>
          </tr>
          <tr>
            <td>IPK : 3.71</td>
          </tr>
          <tr>
            <td rowspan="2"><img src="#" /></td>
            <td>Teknik Komputer Jaringan</td>
          </tr>
          <tr>
            <td>SMK Negeri 26 Jakarta Timur (2011 - 2015)</td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default Education;