import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// Default Image
import defaultImg from '../images/room-1.jpeg';
// Data type checking
import PropTypes from 'prop-types';


export default function Room({room}) {

  const {images, slug, price, name} = room;

  return (

    <article className="room">

      <div className="img-container">
        <img src={images[0] || defaultImg} alt="Featured Room" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>Per Night</p>
        </div>

        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          Features
        </Link>
      </div>

      <p className='room-info'>{name}</p>

    </article>
  
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};