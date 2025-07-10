import React from "react";
// Default Image
// import defaultImg from '../images/room-1.jpeg';
// Components
// import { Hero } from '../Components/Hero';
import Banner from "../Components/Banner";
// React Router
import { Link, useParams } from "react-router-dom";
// Context API
import { RoomContext } from "../Context";
// Styled COmponent
import HeroStyled from "../Components/HeroStyled";

const SingleRoom = () => {
  const { slug } = useParams();
  const context = React.useContext(RoomContext);

  const room = context.getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No Such Room Could Be Found</h3>
        <Link to="/rooms" className="btn-primary">
          Back To Rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    images,
    price,
    pets,
    capacity,
    size,
    extras,
    breakfast,
  } = room;

  // const [mainImg, ...defaultImg] = images; // Destructure images mainImg is 1st image while defaultImg is all other images
  // console.log(defaultImg);

  return (
    <>
      <HeroStyled img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </HeroStyled>

      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => {
            return <img key={index} src={image} alt={name} />;
          })}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>

          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} People` : `${capacity} Person`}{" "}
            </h6>
            <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
            <h6>{breakfast && "Free Breakfast Included"}</h6>
          </article>
        </div>
      </section>

      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
