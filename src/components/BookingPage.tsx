import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAll from "../fetchApi/FetchAll";
import axios from "axios";
import IBooking from "../fetchApi/Interface";


function BookingsPage() {
  const [level, setLevel] = useState("");
  const [städare, setStädare] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  



  

  const postBookings = async () => {
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
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost:3000/clean");
      setBookings(response.data);
      console.log(response.data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Dina bokade städningar</h1>

      
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
      ></input>
      <input
        value={time}
        type="time"
        name="start_time"
        onChange={(e) => setTime(e.target.value)}
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
      <button id="btn-1" onClick={() => postBookings()}>
        Boka nu
      </button>

      <p>Här kan du se en lista över dina bokade städningar:</p>
      <FetchAll bookings={bookings} setBookings={setBookings}></FetchAll>
      <ul></ul>

      <h1>Utförda bokningar</h1>
      <p>Här kan du se en lista över dina Utförda bokade städningar</p>

      <Link to="/">Tillbaka till startsidan</Link>
    </div>
  );
}

export default BookingsPage;
