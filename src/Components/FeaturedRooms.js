import React, { Component } from 'react';
// Context API
import { RoomContext } from '../Context';
// Component
import Title from '../Components/Title';
import Loading from './Loading';
import Room from '../Components/Room';

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;

  render() {

    let {loading, featuredRooms: rooms} = this.context;

    rooms = rooms.map((room) => {
        return <Room key={room.id} room={room} />;
    })

    return (
      
        <>
            <section className="featured-rooms">
                <Title title="Featured Room" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        </>
    )
  }
}