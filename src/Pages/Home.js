import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../Components/Hero";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <div className="home-banner">
          <h1>
            The Best Rooms <br />
            In The World
          </h1>
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </div>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
