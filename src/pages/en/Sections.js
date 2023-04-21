import '../../stylesheet.css';
import '../../responsive.css';
import Biodata from './Sections/Biodata';
import Profile from './Sections/Profile';
import Education from './Sections/Education';
import Skill from './Sections/Skill';
import Certificate from './Sections/Certificate';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

function Sections() {
  return (
    <div className="section-wrapper">
      <Biodata />
      <Profile />
      <Education />
      <Skill />
      <Certificate />
      <Projects />
      <Contact />
    </div>
  );
}

export default Sections;