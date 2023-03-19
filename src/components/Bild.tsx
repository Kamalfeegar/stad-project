import React  from 'react'


import { Component } from 'react'

function Bild() {
    const myStyle={
        backgroundImage: "url(/bild.png)",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
     <div style={myStyle} >
    <h1>GeeksForGeeks</h1>
  </div>
  )
}

export default Bild
