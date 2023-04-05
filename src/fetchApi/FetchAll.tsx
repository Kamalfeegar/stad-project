import React, { useState } from "react";
import axios from "axios";
import "../fetchApi/FetchAll.css";
import IBooking from "../fetchApi/Interface";

interface PropsType {
  bookings: IBooking[];
  setBookings: (bookings: IBooking[]) => void;
}

interface CompletedBookingsPropsType {
  completedBookings: IBooking[];
}

const CompletedBookings = (props: CompletedBookingsPropsType) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds((prevState) =>
        prevState.filter((checkedId) => checkedId !== id)
      );
    } else {
      setCheckedIds((prevState) => [...prevState, id]);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete("http://localhost:3000/clean/", {
        data: { ids: checkedIds },
      });

      const checkedBoxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      checkedBoxes.forEach((box) => {
        const grandparent = box.parentNode?.parentNode;
        const parent = box.parentNode;
        console.log(grandparent, parent);

        if (grandparent) {
          grandparent.parentNode?.removeChild(grandparent);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const sortedBookings = [...props.completedBookings].sort(
    (a: IBooking, b: IBooking) =>
      new Date(a.Date).getTime() - new Date(b.Date).getTime()
  );


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map((booking: IBooking) => (
            <tr key={booking.uuid}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(booking._id.toString())}
                />
              </td>
              <td>{booking.Time}</td>
              <td>
                {new Date(booking.Date.toString()).toISOString().split("T")[0]}
              </td>
              <td>{booking.Level}</td>
              <td>{booking.Status}</td>
              <td>{booking.Städare}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDeleteClick} disabled={checkedIds.length === 0}>
        Delete Selected
      </button>
    </div>
  );
};

const Booking = (props: PropsType) => {
  console.log(props);
  const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);

  const handleMoveToCompleted = (id: number) => {
    const bookingIndex = props.bookings.findIndex(
      (booking: IBooking) => booking._id === id
    );
    if (bookingIndex >= 0) {
      const booking = props.bookings[bookingIndex];
      const newBookings = [...props.bookings];
      newBookings.splice(bookingIndex, 1);
      props.setBookings(newBookings);
      setCompletedBookings([...completedBookings, booking]);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/clean/${id}`);
      const newBookings = props.bookings.filter(
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
        {props.bookings
          .sort(
            (a: IBooking, b: IBooking) =>
              new Date(a.Date).getTime() - new Date(b.Date).getTime()
              )
              .map((booking: IBooking) => (
                <li className="li" key={booking.uuid}>
              <h2 className="h2">{booking.Time}</h2>
              <h2 className="h2">
                {new Date(booking.Date.toString()).toISOString().split("T")[0]}
              </h2>
              <p className="h2">{booking.Level}</p>
              <h2 className="h2">{booking.Status}</h2>
              <h2 className="h2">{booking.Städare}</h2>
              <button onClick={() => handleDelete(booking._id)}>Delete</button>
              <button onClick={() => handleMoveToCompleted(booking._id)}>
                Move to Completed
              </button>
            </li>
          ))}
      </ul>

      <div className="div">
        <h1>Utförda bokningar</h1>
        <p>Här kan du se en lista över dina Utförda bokade städningar</p>
        <CompletedBookings completedBookings={completedBookings} />
      </div>
    </div>
  );
};

export default Booking;
