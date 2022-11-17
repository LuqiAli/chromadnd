import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar selected="Contact Us" />
      <div className="navbar-back"></div>
      <div className="page-container">
        <h1 className="about-header">Get in touch!</h1>
        <div className="about-header-lb"></div>
        <div className="contact-form-container">
          <div className="contact-item">
            <h4 className="email-header">Contact us via email</h4>
            <div className="contact-email">
              <p>c</p>
              <p>h</p>
              <p>r</p>
              <p>o</p>
              <p>m</p>
              <p>a</p>
              <p>d</p>
              <p>n</p>
              <p>d</p>
              <p>@</p>
              <p>g</p>
              <p>m</p>
              <p>a</p>
              <p>i</p>
              <p>l</p>
              <p>.</p>
              <p>c</p>
              <p>o</p>
              <p>m</p>
            </div>
          </div>
          <div className="contact-item">
            <h4 className="email-header">Visit our Instagram</h4>
            <a
              href="https://instagram.com/chroma_dnd"
              className="contact-email"
            >
              @chroma_dnd
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
