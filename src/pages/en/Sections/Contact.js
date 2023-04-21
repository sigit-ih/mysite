import '../../stylesheet.css';
import '../../responsive.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="heading">
          <h3>Kontak Saya</h3>
        </div>
        <span className=""></span>sigitispramono.h@gmail.com
        <span className=""></span><a href="https://linkedin.com/in/sigitispramonohadi">Sigit Ispramono Hadi</a>
        <span className=""></span><a href="https://github.com/sigit-ih">Sigit Ispramono Hadi</a>
        {/* 
        <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
          Name: <input id="contact-input" name="contact-input" placeholder="Nama" required>
          <p id="empty-text">Must enter name!</p> 
          <input type="submit" value="Submit">
        </form>
         */}
        <input id="contact-input" placeholder="Nama" />
        <p id="caps-text">Capslock active</p> 
      </div> 
    </section>
  );
}

export default Contact;