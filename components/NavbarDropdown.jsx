import React from "react";
import Link from "next/link";

const NavbarDropdown = () => {
  const handleClick = () => {
    document.body.classList.remove("show");
  };

  return (
    <div className="dropdown">
      <div className="dropdown-links">
        <Link onClick={handleClick} className="dropdown-link" href="/">
          Home
        </Link>
        <Link onClick={handleClick} className="dropdown-link" href="/about">
          About Us
        </Link>
        <Link onClick={handleClick} className="dropdown-link" href="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavbarDropdown;
