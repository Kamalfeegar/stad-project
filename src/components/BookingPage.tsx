import React from 'react';
import { Link } from 'react-router-dom';



function BookingsPage() {
    return (
      <div>
        <h1>Dina bokade städningar</h1>
        <p>Här kan du se en lista över dina bokade städningar:</p>
        <ul>
          <li>Städning den 15 mars</li>
          <li>Städning den 22 mars</li>
          <li>Städning den 29 mars</li>
        </ul>
        <Link to="/">Tillbaka till startsidan</Link>
      </div>
    );
  }

  export default BookingsPage