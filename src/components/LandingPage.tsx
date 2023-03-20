import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import './LandingPage.css'




function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bookinPage')


  } 
  return (
    
    <div className='article'>


      <div className='img-text'>
      <h1 className='titel1'>Vi Städar fint <br/> hemma hos dig!</h1>
      <h3 className='titel3'>Varför vänta när det kan se fint ut!!</h3>

      <img className='banner' src="cleaningPic.jpg" height={500} width={1000} />

    </div>

      <div className='ibp'>
    <input type='text' className='postnummer' placeholder='POSTNUMMER'/>
    <button className='postbtn' onClick={handleClick}>Gå Vidare</button>
      </div>
      
      <div className='inne'>
        
      <div><h1>Basic</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Topp</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Diamant</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Fönster tvätt</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      
    </div>

     
    </div>
  );
}

export default LandingPage