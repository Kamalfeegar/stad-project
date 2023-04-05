import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingsPage from './components/BookingPage';




function App() {
  return (
    
    <Router>
      <Header/>
    <Routes>
    <Route path= '/' element={<LandingPage/>}/>
    <Route path= '/landingpage' element={<LandingPage/>}/>
      
    <Route path= '/' element={<BookingsPage/>}/>
      <Route path='/bookingpage' element={<BookingsPage />} />
      
      
    </Routes>
    
    <Footer/>
  </Router>
  );
}

export default App;
