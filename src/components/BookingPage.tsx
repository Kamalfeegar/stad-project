import React from 'react';
import { Link } from 'react-router-dom';
import FetchAll from '../fetchApi/FetchAll'



function BookingsPage() {
    return (
      <div>
        <h1>Dina bokade städningar</h1>
        <p>Här kan du se en lista över dina bokade städningar:</p>
        <FetchAll></FetchAll>
        <ul>
          
        </ul>
        <Link to="/">Tillbaka till startsidan</Link>
      </div>
    );
  }

  export default BookingsPage