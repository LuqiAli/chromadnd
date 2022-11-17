import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-socials">
        <p className="footer-socials footer-header">OUR SOCIALS</p>
        <p>
          <a
            className="footer-item"
            href="https://www.instagram.com/chroma_dnd/"
          >
            Instagram
          </a>
        </p>
        <p>Facebook (Coming Soon)</p>
        <p>Linkedin (Coming Soon)</p>
      </div>
      <div className="footer-navigation">
        <p className="footer-header">NAVIGATION</p>
        <p>
          <Link className="footer-item" href="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="footer-item" href="/about">
            About Us
          </Link>
        </p>
        <p>
          <Link className="footer-item" href="/contact">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
