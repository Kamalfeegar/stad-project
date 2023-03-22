import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='headern'>
        
        <ul className='header_ul'>
        <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/null/external-Clean-House-chinese-new-year-bearicons-detailed-outline-bearicons.png"/>
        <li className='header_li'>TJÄNSTER</li>
        <li className='header_li'>OM OSS</li>
        <li className='header_li'>KONTAKT</li>
        <li className='header_li'>
        <Link to="/bookingpage"><button className='btn'>FÖRETAG</button> </Link>
        </li>
        
        </ul>

      
    </div>
  )
}

export default Header

