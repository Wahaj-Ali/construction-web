import React from 'react';
import { Link } from 'react-router-dom';
import {FiMail} from 'react-icons/fi';
import './Thanks.css';

const Thanks = () => {
  return (
    <div className='thanks'>
        <div className="msgIcon">
          <FiMail className='msg' />
        </div>

        <div className="thanksText">
          <h2>Thank you for submitting!</h2>
          <p>Your message has been sent!</p>
        </div>

        <div className="gohomeBtn">
          <Link to="/"><button className='quote-btn'>Go Home</button></Link>
        </div>
      </div>
  )
}

export default Thanks