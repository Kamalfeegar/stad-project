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

      <img className='banner' src="cleaningPic.jpg" height={500} width={1200} />
      </div>

    <div/>
      <div className='ibp'>
    <input type='text' className='postnummer' placeholder='POSTNUMMER'/>
    <button className='postbtn' onClick={handleClick}>Gå Vidare</button>
      </div>
      
      <div id='boxes'>
      <div className='box1'><img src="basic-cl.jpg" height={200} width={200} alt="" /></div>
      <div className='box2'><img src="top-cl.jpg" width={200} height={200} alt="" /></div>
      <div className='box3'><img src="diamond-1200x627-1-1.jpg" width={200} height={200} alt="" /></div>
      <div className='box4'><img src="window-cl.jpeg" width={200} height={200} alt="" /></div>
      </div>
      <div className='inne'>
        
      <div><h1>Basic</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Topp</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Diamant</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Fönsterputs</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      
    </div>

     
    </div>
  );
}

export default LandingPage