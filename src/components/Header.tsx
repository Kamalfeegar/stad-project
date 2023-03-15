import React from 'react'
import './Header.css'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';


function Header() {
  return (
    <div className='headern'>
        <span><h1>Städa fint</h1><CleaningServicesIcon className='CleaningServicesIcon'/></span>
        <h2>TJÄNSTER</h2>
        <h2>OM OSS</h2>
        <h2>KONTAKT</h2>

      
    </div>
  )
}

export default Header

