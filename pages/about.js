import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

function About() {
  return (
    <div>
      <Navbar selected="About Us" />
      <div className="navbar-back"></div>
      <div className="page-container">
        <h1 className="about-header">About Us</h1>
        <div className="about-header-lb"></div>
        <p className="about-text about-text-main">
          Here at Chroma Design & Development Limited, we strive to produce the
          highest level of work for our clients. Every project we receive is met
          with decisive thinking, diverse abilities and talents, ranging from
          one end of design to the other end of development. We believe every
          aspect of your brand should convey your message and communicate what
          your business stands for.
        </p>
        <p className="about-text about-text-header">
          We offer a great range of services, such as:
        </p>
        <div className="about-services">
          <p className="about-service">
            <i className="fa-solid fa-arrow-right"></i> Graphical Design
          </p>
          <p className="about-service">
            <i className="fa-solid fa-arrow-right"></i> Web Design
          </p>
          <p className="about-service">
            <i className="fa-solid fa-arrow-right"></i> 3D Design
          </p>
          <p className="about-service">
            <i className="fa-solid fa-arrow-right"></i> Backend Development
          </p>
          <p className="about-service">
            <i className="fa-solid fa-arrow-right"></i> Frontend Development
          </p>
        </div>
        <h2 className="about-contact-header">
          Get in contact
          <br />
          with us now!
        </h2>
        <div className="about-contact-button-container">
          <Link className="about-contact-button" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
