import React, { useState } from "react";
import axios from "axios";
import IBooking from "../fetchApi/Interface";

const HandleDeleteBooking = ({ id }: { id: number }) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/clean/${id}`);
      setBookings((bookings) => bookings.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Failed to delete booking:", error);
    }
  };

  return <></>;
};

export default HandleDeleteBooking;
