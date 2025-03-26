import React from 'react';
import aboutBg from '../../Assets/about-bg.jpg';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <div className='insuranceHero'>
            <img src={aboutBg} alt="Insurance Carriers" className='insuranceHeroImg' />
            <div className="insuranceHeroDesc">
                <h1 className="ihTtitle">About Fully Constructed</h1>
                <h3>We are proud to be a trusted and prominent platform serving the construction and renovation community in New York. With a passion for bringing construction dreams to life, we've established ourselves as a reliable partner in the world of construction and renovation.</h3>
            </div>
        </div>
    )
}

export default AboutHero