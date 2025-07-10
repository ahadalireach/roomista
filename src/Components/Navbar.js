import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "Rooms",
      url: "/rooms",
    },
    {
      id: 3,
      text: "About",
      url: "/about",
    },
    {
      id: 4,
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button className="nav-btn" type="button" onClick={toggleState}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        <ul className={`${isOpen ? "nav-links show-nav" : "nav-links"}`}>
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
