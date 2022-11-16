import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";

function Navbar(props) {
  const selected = props.selected;
  const links = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Contact Us", route: "/contact" },
  ];

  const linkElements = links.map((link) => {
    return selected === link.name ? (
      <p key={link.name}>
        <Link className="link selected" href={link.route}>
          {link.name}
        </Link>
      </p>
    ) : (
      <p key={link.name}>
        <Link className="link" href={link.route}>
          {link.name}
        </Link>
      </p>
    );
  });

  const handleClick = () => {
    document.body.classList.toggle("show");
  };

  return (
    <>
      <NavbarDropdown />
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <h2 className="logo-header">CHROMA</h2>
            <h3 className="logo-subtext">Design & Development</h3>
          </div>
          <div className="links">{linkElements}</div>
          <div className="navbar-hamburger" onClick={handleClick}>
            <div className="navbar-bars">
              <i className="bars fa-solid fa-bars-staggered"></i>
            </div>
            <div className="navbar-x">
              <i className="x fa-regular fa-x"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
