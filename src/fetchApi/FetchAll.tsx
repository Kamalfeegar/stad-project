import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../fetchApi/FetchAll.css'
import  IBooking  from '../fetchApi/Interface';



const Booking = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('http://localhost:3000/clean');
      setBookings(response.data);
      console.log(response.data);
    };
    fetchBookings();
  }, []);
  
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/clean/${id}`);
      setBookings((bookings) => bookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const deleteOne = async (id: number) => {
    await handleDelete( id );
    const updatedBookings = bookings.filter(booking => booking._id !== id);
    setBookings(updatedBookings);
  }
  

  return (
    <div className='div'>
      <ul className='ul'>
        {bookings.map((booking) => (
          <li className='li' key={booking.uuid} >
            <h2 className='h2'>{booking.Time}</h2>
            <h2 className='h2'>{booking.Level}</h2>
            <h2 className='h2'>{booking.Status}</h2>
            <h2 className='h2'>{booking.Städare}</h2>
            <button onClick={() => deleteOne(booking._id)}>Delete</button>
          </li>
        )) }
      </ul>
    </div> 
  );
}

export default Booking;
