import React, { useState, useEffect } from "react";
import axios from "axios";
import "../fetchApi/FetchAll.css";
import IBooking from "../fetchApi/Interface";

interface propsType {
  bookings: IBooking[];
  setBookings: (bookings: IBooking[]) => void;
}


const Booking = (props: propsType) => {
  console.log(props);
  const bookings = props.bookings;

  

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/clean/${id}`);
      const newBookings = bookings.filter(
        (booking: IBooking) => booking._id !== id
      );
      props.setBookings(newBookings);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="div">
      <ul className="ul">
        {bookings.map((booking: IBooking) => (
          <li className="li" key={booking.uuid}>
            <h2 className="h2">{booking.Time}</h2>
            <h2 className="h2">
              {new Date(booking.Date.toString()).toISOString().split("T")[0]}
            </h2>
            <p className="h2">{booking.Level}</p>
            <h2 className="h2">{booking.Status}</h2>
            <h2 className="h2">{booking.Städare}</h2>
            <button onClick={() => handleDelete(booking._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;


