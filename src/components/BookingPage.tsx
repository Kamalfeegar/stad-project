import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAll from "../fetchApi/FetchAll";
import axios from "axios";
import IBooking from "../fetchApi/Interface";
import Dubbel from "./Error";
import { useLocation } from 'react-router-dom';


function BookingsPage() {
  const location = useLocation();
  const name = location.state.name;
  const [level, setLevel] = useState("");
  const [städare, setStädare] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get<IBooking[]>("http://localhost:3000/clean");
      setBookings(response.data);
    };
    fetchBookings();
  }, []);
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost:3000/clean/user");
      console.log(response)
    };
    fetchBookings();
  }, []);

  const postBookings = async () => {
    const existingBooking = bookings.find(
      (booking) =>
        booking.Level === level &&
        booking.Städare === städare &&
        new Date(booking.Date).toLocaleDateString() === new Date(date).toLocaleDateString() &&
        booking.Time === time
    );

    if (existingBooking) {
      setError(true);
      return;
    }
    const response = await axios.post("http://localhost:3000/clean", {
      Level: level,
      Städare: städare,
      Status: false,
      Date: date,
      Time: time,
    });
    const newBooking = response.data as IBooking;
    setBookings([...bookings, newBooking]);
    setStädare("");
    setDate("");
    setTime("");
    setLevel("");
  }; const felMeddalande = () => {
    setError(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postBookings();
  };
  
  
  
  



  return (
    <div>  <h1> Välkommen {name}!</h1>
      <h1>Dina bokade städningar</h1>


   
   <form onSubmit={handleSubmit}>
  
  <select id="names" name="names" value={städare} onChange={(e) => setStädare(e.target.value)}>
  <option value="John">John</option>
  <option value="Mary">Mary</option>
  <option value="Peter">Peter</option>
  <option value="Lisa">Lisa</option>
</select>


      
      
      <input
        value={date}
        type="date"
        name="birth_date"
        onChange={(e) => setDate(e.target.value)}
        required
      ></input>
      <input
        value={time}
        type="time"
        name="start_time"
        onChange={(e) => setTime(e.target.value)}
        required
      ></input>
      <br></br>
      <input
        type="radio"
        name="Topp"
        id="Topp"
        value="Topp"
        checked={level === "Topp"}
        onChange={(e) => setLevel(e.target.value)}
      ></input>
      <label htmlFor="Topp">Topp</label>
      <br></br>
      <input
        type="radio"
        name="Basic"
        id="Basic"
        value="Basic"
        checked={level === "Basic"}
        onChange={(e) => setLevel(e.target.value)}
      ></input>
      <label htmlFor="Basic">Basic</label>
      <br></br>
      <input
        type="radio"
        name="Diamant"
        id="Diamant"
        value="Diamant"
        checked={level === "Diamant"}
        onChange={(e) => setLevel(e.target.value)}
      ></input>
      <label htmlFor="Diamant">Diamant</label>
      <br></br>
      <input
        type="radio"
        name="Fönster"
        id="Fönster"
        checked={level === "Fönster"}
        value="Fönster"
        onChange={(e) => setLevel(e.target.value)}
      ></input>
      <label htmlFor="Fönster">Fönster</label>
      <br></br>
      <button type="submit">Submit</button>

      </form>

      {error && (
        <Dubbel onClose={felMeddalande} />
      )}


      <p>Här kan du se en lista över dina bokade städningar:</p>
      <FetchAll bookings={bookings} setBookings={setBookings}></FetchAll>
      <ul></ul>

      <Link to="/">Tillbaka till startsidan</Link>
    </div>
  );
}

export default BookingsPage;
