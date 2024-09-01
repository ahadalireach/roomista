import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsCursorFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col footer-col1">
          <img
            src={logo}
            alt="Roomista"
            className="footer-logo footer-small-text"
          />
          <p>Stay Safe, Stay Comfortable with Roomista.</p>
        </div>

        <div className="footer-col footer-col2">
          <h5>Information</h5>
          <ul>
            <li className="footer-small-text">
              <FaPhoneAlt className="footer-col2-icon" />{" "}
              <a href="tel:+923241441444" target="_blank">
                +923241441444
              </a>
            </li>
            <li className="footer-small-text">
              <FaEnvelope className="footer-col2-icon" />
              <a href="mailto:roomista@gmail.com" target="_blank">
                roomista@gmail.com
              </a>
            </li>

            <li className="footer-small-text">
              <FaMapMarkerAlt className="footer-col2-icon" /> Lahore, Punjab
              Pakistan
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Pages</h5>
          <ul>
            <li className="footer-small-text">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-small-text">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="footer-small-text">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer-small-text">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Subscribe</h5>
          <form className="subscribe-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">
              <BsCursorFill />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom footer-small-text">
        <div className="footer-text">
          <p>
            Copyright © {new Date().getFullYear()}
            <span className="footer-text"> Roomista</span>.
          </p>
        </div>
        <div className="footer-links">
          <p>
            <Link to="/faq">FAQ</Link> | <Link to="/tou">Terms of Use</Link> |{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
