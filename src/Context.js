import React, { Component, createContext } from 'react';
// Data 
import items from './data';
// Create context
const RoomContext = createContext();


export default class Context extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true, 
        type: 'all',
        capacity: 1,
        price: 1,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    //  componentDidMount is a lifecycle method that is called automatically by React once the component has been rendered to the screen
    componentDidMount(){
        let rooms = this.getData(items);
        let featuredRooms = rooms.filter(room => room.featured === true); // Feautred in a data file
        // Max Price Of Room
        let maxPrice = Math.max(...rooms.map((room) => room.price));
        // Max Size Of Room
        let maxSize = Math.max(...rooms.map((room) => room.size));
        // Set State
        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false, price: maxPrice, maxPrice, maxSize
        });
    }

    // getting Data
    getData(items){
        let tempItems = items.map((item) => {
            // Destructuring Id
            let id = item.sys.id;
            // Destructuring Images
            {/* Item having fields object which have further images*/} 
            let images = item.fields.images.map(image =>  image.fields.file.url  ); // Further properties in image object
            
            // Destructuring Fields data
            let room = {...item.fields, images, id};
            return room;
        });

        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    // Checking or handle event
    handleSubmit = event => {
      let target = event.target;
      let type = target.type === 'checkbox' ? target.checked : target.value;
      let name = event.target.name;

      this.setState({
        [name] : type
      }, this.filterRooms)

    }

    // Filtering Rooms
    filterRooms = () => {
      
      let {rooms, type, price, minSize, maxSize, breakfast, pets, capacity} = this.state;
      // All Rooms
      let tempRooms = [...rooms];
      // Change Capacity Type
      capacity = parseInt(capacity);
      price = parseInt(price);

    // Fiter By Type  
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // FIlter By Capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // Filter By Price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // Filter By Size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // Filter By Breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // FIlter By Pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    } 

      this.setState({
        sortedRooms: tempRooms
      })
    }

  render() {
    return (
      
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleSubmit: this.handleSubmit}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}

export {RoomConsumer, RoomContext};