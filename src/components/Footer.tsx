import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className='footer'>
      <div className="box">
        <ul className='links'>
         
          <li><a href='#'>HEM</a></li>
          <li><a href='#'>TJÄNSTER</a></li>
          <li><a href='#'>OM OSS</a></li>
          <li><a href='#'>KONTAKT</a></li>
        </ul>
      </div>
      <div className="box">
      <h2>News letter</h2>
      <form action="" className='registration'>
        <input type="email" name='email' className='email' placeholder='skriv din mail här' />
        <button type='submit' className='button'>Subscribe Now</button>
      </form>
      </div>

      <div className="box">
        <h1>Kontakta Oss</h1>
        <p className='adress'>543 21 Mlohkcots CBA 03</p>
        <ul className='social'>
        <li><FacebookIcon className='FacebookIcon'/></li>
        <li><InstagramIcon className='InstagramIcon'/></li>
        <li><TwitterIcon className='TwitterIcon'/></li>
        <li><YouTubeIcon className='YouTubeIcon'/></li>
        </ul>
      </div>
    
     
    </footer>
  )
}

export default Footer
