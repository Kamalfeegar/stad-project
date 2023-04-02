import React from 'react'
import IBooking from "../fetchApi/Interface";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Completed() {

  const [bookings, setBookings] = useState<IBooking[]>([]);
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get<IBooking[]>("http://localhost:3000/clean");
      const filteredBookings = response.data.filter(booking => booking.Status === true);
      setBookings(filteredBookings);
    };
    fetchBookings();
  }, []);
  return (
    <div>

    <ul>
      {bookings.map(booking => (
        <li key={booking.uuid}>
          <h2>Booked Session</h2>
          <p>Time: {booking.Time}</p>
          <p>Level: {booking.Level}</p>
          <p>Städare: {booking.Städare}</p>

        </li>
      ))}
    </ul>
  </div>
  )
}
