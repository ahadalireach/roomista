import React from "react";
import { Hero } from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Service from "../Components/Services";
import aboutBcg from "../images/aboutBcg.jpg";

const About = () => {
  return (
    <>
      <Hero hero="aboutHero" backgroundImage={aboutBcg}>
        <Banner title="About Us">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <div className="about-container">
        <p className="about-paragraph">
          Welcome to <strong>Roomista</strong>, your trusted partner in finding
          the perfect room for your travels. Our mission is to ensure that you
          stay safe and comfortable, no matter where your journey takes you.
          With a wide range of accommodations to choose from, we strive to
          provide options that meet all your needs and preferences.
        </p>
        <p className="about-paragraph">
          <strong className="about-strong">Why choose Roomista?</strong>
        </p>
        <ul className="about-list">
          <li className="about-list-item">
            Comprehensive listings of rooms and accommodations tailored to your
            comfort and safety.
          </li>
          <li className="about-list-item">
            User-friendly search and booking process to make your experience
            seamless.
          </li>
          <li className="about-list-item">
            Verified reviews and ratings to help you make informed decisions.
          </li>
          <li className="about-list-item">
            24/7 customer support to assist you with any inquiries or issues.
          </li>
        </ul>
        <p className="about-paragraph">
          At Roomista, we believe in making your travel experience as
          hassle-free as possible. Our slogan, "
          <em>Stay Safe, Stay Comfortable with Roomista</em>," reflects our
          commitment to providing you with the best options for a pleasant stay.
          Thank you for choosing Roomista!
        </p>
      </div>
      <Service />
    </>
  );
};

export default About;
