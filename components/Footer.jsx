import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-socials footer-col">
        <p className="footer-socials footer-header">OUR SOCIALS</p>
        <p className="footer-row">
          <a
            className="footer-item"
            href="https://www.instagram.com/chroma_dnd/"
          >
            Instagram
          </a>
        </p>
        <p className="footer-row">(Coming Soon)</p>
        <p className="footer-row">(Coming Soon)</p>
      </div>
      <div className="footer-navigation footer-col">
        <p className="footer-header">NAVIGATION</p>
        <p className="footer-row">
          <Link className="footer-item" href="/">
            Home
          </Link>
        </p>
        <p className="footer-row">
          <Link className="footer-item" href="/about">
            About Us
          </Link>
        </p>
        <p className="footer-row">
          <Link className="footer-item" href="/contact">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
