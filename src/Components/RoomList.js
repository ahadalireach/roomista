import React from 'react';
// Component
import Room from '../Components/Room';

export default function RoomList({rooms}) {

    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>Unfortunately No Rooms Matched Your Search Parameters</h3>
            </div>
        )
    }

  return (

    <section className="roomlist">
        <div className="roomslist-center">
            {rooms.map(item => {
                return <Room key={item.id} room={item} />;
            })}
        </div>
    </section>

  )
}