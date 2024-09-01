import React from 'react';
// Component
import Title from '../Components/Title';
// Context API
import { useContext } from 'react';
import { RoomContext } from '../Context';

// Get Unique Value
let uniqueValue = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}
export default function FilterRooms({rooms}) {

  const context = useContext(RoomContext);
  
  // Destructuring
  const {
    handleSubmit, 
    type, 
    price, 
    minPrice, 
    maxPrice, 
    minSize, 
    maxSize, 
    capacity, 
    // pets, 
    // breakfast
  } = context;
  
  // Get Unique Types
  let types = uniqueValue(rooms, 'type');
  // Add All
  types = ['all', ...types];
  // Mapping All Types
  types = types.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  // Get unique Capacity
  let peoples = uniqueValue(rooms, 'capacity');
  // Mapping All Peoples
  peoples = peoples.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (

    <section className="filter-container">
      <Title title="Search Rooms" />

      <form className="filter-form">

        {/* Select Type */}
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select 
              name="type" 
              id="type" 
              value={type} 
              onChange={handleSubmit}
              className='form-control'
            >
             {types} 
            </select>
          </div>
        {/* End Select Type */}

        {/* Guest Type */}
        <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select 
              name="capacity" 
              id="capacity" 
              value={capacity} // Change type to capacity here
              onChange={handleSubmit}
              className='form-control'
            >
              {peoples} 
            </select>
          </div>
        {/* End Select Type */}

        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">
            Room Price {price}
          </label>
          <input type="range" name='price' id='price' min={minPrice} max={maxPrice} onChange={handleSubmit} className='form-control' value={price} />
        </div>

        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="inputs">
            <input type="number" name='minSize' id='minSize' value={minSize} onChange={handleSubmit} className='size-input' />
            <input type="number" name='maxSize' id='maxSize' value={maxSize} onChange={handleSubmit} className='size-input' />
          </div>
        </div>

        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name='breakfast' id='breakfast' onChange={handleSubmit} />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name='pets' id='pets' onChange={handleSubmit} />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>

      </form>
    </section>
    
  )
}