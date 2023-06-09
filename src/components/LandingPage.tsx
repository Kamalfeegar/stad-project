import React, {useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import './LandingPage.css'
import axios from 'axios'


function LandingPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/clean/user', {
        name: inputValue,
      });
      console.log(response.data);

      navigate('/bookingpage', { state: { name: inputValue } });
    } catch (error) {
      console.error(error);
    }
  }; 
  return (
    
    <div className='article'>


      <div className='img-text'>
      <h1 className='titel1'>Vi Städar fint <br/> hemma hos dig!</h1>
      <h3 className='titel3'>Varför vänta när det kan se fint ut!!</h3>

      <img className='banner' src="cleaningPic.jpg" />
      </div>

    <div/>
      <div className='ibp'>
    
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text"  className='postnummer' placeholder='Skriv ditt namn' value={inputValue} onChange={handleInputChange} />
          <br />
        </label>
        <button className='push' type="submit">Submit</button>
      </form>
      </div>


      
      <div id='boxes'>
      <div className='box1'><img src="basic-cle.webp" height={200} width={200} alt="basic" /></div>
      <div className='box2'><img src="top-cl.jpg" width={200} height={200} alt="top-cleaning" /></div>
      <div className='box3'><img src="diamond-1200x627-1-1.jpg" width={200} height={200} alt="diamond cleaning" /></div>
      <div className='box4'><img src="window-cl.jpeg" width={200} height={200} alt="window cleaning" /></div>
      </div>
      <div className='inne'>
        
      <div><h1>Basic</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Top</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Diamant</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      <div><h1>Fönsterputs</h1><br/><h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint atque ad, amet similique sed odio? Incidunt sequi ducimus quia in eius at eaque, accusamus atque quos </h4></div>
      
    </div>

     
    </div>
  );
}

export default LandingPage