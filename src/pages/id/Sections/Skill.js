import '../../../stylesheet.css';
import '../../../responsive.css';

function Skill() {
  return (
    <section id="skill">
      <div className="container">
        <div className="heading">
          <h3>Keahlian</h3>
        </div>
        <div className="skill-wrap">
          <div className="skill-left">
            <table>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-office.png")} alt="Ms. Office" /></td>
                <td>Microsoft Office</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-html.png")} alt="HTML" /></td>
                <td>HTML</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-css.png")} alt="CSS" /></td>
                <td>CSS</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-php.png")} alt="PHP" /></td>
                <td>PHP</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-javascript.png")} alt="JavaScript" /></td>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-react.png")} alt="React" /></td>
                <td>React</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-sass.png")} alt="SASS" /></td>
                <td>SASS</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-git.png")} alt="Git" /></td>
                <td>Git</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="skill-right">
            <table>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-github.png")} alt="Github" /></td>
                <td>Github</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-go.png")} alt="Go" /></td>
                <td>Go</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-mysql.png")} alt="MySQL" /></td>
                <td>SQL (MySQL)</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-tableau.png")} alt="Tableau" /></td>
                <td>Tableau</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/logo-r.png")} alt="R" /></td>
                <td>R</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/indonesia.png")} alt="Bahasa" /></td>
                <td>Bahasa Indonesia</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/english.png")} alt="English" /></td>
                <td>English</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td class="table-logo" rowspan="2"><img src={require("../../../assets/japan.png")} alt="日本語 N5-1" /></td>
                <td>日本語 N5-1</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Skill;