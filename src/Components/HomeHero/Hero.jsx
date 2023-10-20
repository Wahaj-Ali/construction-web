import React from 'react';
import bg from '../../Assets/main-bg.jpg';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero'>
      <img src={bg} alt="" className="heroImg" />
        <div className="heroDesc">
          <h1 className="heroTitle">Fully Constructed: Gateway to Building Dreams</h1>
          <h2 className="heroSubTitle">Empowering New York with Quality Construction and Renovation Solutions</h2>
          <Link to="/get_a_quote"><button className='quote-btn heroBtn'>Get Started</button></ Link>
        </div>
    </div>
  )
}
