import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';



function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bookinPage')


  } 
  return (
    <div>
      
      <h1>Vi Städar fint <br/> hemma hos dig!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
      <input type='text' className='postnummer'/>
      <button>VÄLJTJÄNST</button>

      <button onClick={handleClick}>Gå Vidare</button>
     
      

    </div>
  );
}

export default LandingPage