import '../../stylesheet.css';
import '../../responsive.css';

function Photo() {
  return (
    <div className="photo">
      <div className="container">
        <div>
          <img src={require("../../assets/4x6.jpg")} alt="Sigit"/>
        </div>
      </div>
    </div>
  );
}

export default Photo;