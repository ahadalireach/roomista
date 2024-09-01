import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Hero } from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import contactBcg from "../images/contactBcg.jpg";

const ContactUs = () => {
  return (
    <>
      <Hero hero="contactHero" backgroundImage={contactBcg}>
        <Banner title="Contact Us">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <div className="contact-us">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Welcome to Roomista, your trusted partner in finding the perfect
            room for your travels. Whether you're planning a vacation or a
            business trip, we're here to ensure your stay is comfortable and
            hassle-free. Feel free to reach out to us for any inquiries or
            assistance you may need.
          </p>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Emergency Help</h3>
              <p>
                <a href="ph:+923241441444">+923241441444</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Quick Email</h3>
              <p>
                <a href="mailto:ahadali.reach@gmail.com">
                  support@roomista.com
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Office Address</h3>
              <p>
                <a>Lahore Punjab, Pakistan</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="col">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
