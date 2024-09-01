import React from "react";
// Components
// import Title from '../Components/Title';
import FilterRooms from "../Components/FilterRooms";
import RoomList from "../Components/RoomList";
import Loading from "../Components/Loading";
// Context API
import { withRoomConsumer } from "../Context";

const RoomsContainer = ({ context }) => {
  const { loading, rooms, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <FilterRooms rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomsContainer);
