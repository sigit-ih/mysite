import '../../../stylesheet.css';
import '../../../responsive.css';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading">
          <h3>Kontak Saya</h3>
        </div>
        <div className="contact-list">
          <span><img src={require("../../../assets/logo-gmail.png")} alt="Gmail" />&nbsp;  sigitispramono.h@gmail.com</span>
          <span><img src={require("../../../assets/logo-linkedin.png")} alt="LinkedIn" />&nbsp;  <a href="https://linkedin.com/in/sigitispramonohadi">Sigit Ispramono Hadi</a></span>
          <span><img src={require("../../../assets/logo-github.png")} alt="Github" />&nbsp;  <a href="https://github.com/sigit-ih">Sigit Ispramono Hadi</a></span>
        </div>
        {/* 
        <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
          Name: <input id="contact-input" name="contact-input" placeholder="Nama" required>
          <p id="empty-text">Must enter name!</p> 
          <input type="submit" value="Submit">
        </form>
         */}
      </div> 
    </section>
  );
}

export default Contact;