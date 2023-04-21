import '../../stylesheet.css';
import '../../responsive.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="photo">
          <a href="#root">
            <img src={require("../../assets/4x6.jpg")} alt="Sigit"/>
          </a>
        </div>
        <div className="title">
          <h1><span>Sigit</span> Ispramono Hadi</h1>
          <p id="flip-wrapper">I am a 
            <div id="flip">
              <p>Frontend Developer</p>
              <p>Backend Developer</p>
              <p>Data Analyst</p>
            </div>
          </p>
          <div className="cv">
            <a href="#root" className="btn hdr">Download CV</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;