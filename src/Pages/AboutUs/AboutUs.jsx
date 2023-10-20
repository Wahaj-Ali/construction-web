import React from 'react'
import AboutHero from '../../Components/AboutHero/AboutHero';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
        <AboutHero />
        <div className="aboutSec">
            <h3>Who We Are</h3>
            <div className='underline'></div>
            <p className="aboutSecText">We are a team of experienced professionals with a collective mission – to provide New York residents with high-quality construction and renovation solutions. Our expertise spans various domains within the construction and renovation industry, enabling us to offer comprehensive solutions to meet your unique needs.</p>
        </div>

        <div className="aboutSec">
            <h3>Our Commitment</h3>
            <div className='underline'></div>
            <p className="aboutSecText">At Fully Constructed, we hold firm to our commitment to deliver excellence. We understand that construction and renovation projects can present unique challenges, and our commitment is to support you in achieving your vision with tailored solutions. As a locally-focused platform, we take the time to understand your specific needs and project goals.</p>
        </div>
    </>
  )
}

export default AboutUs