import React from 'react'
import AboutHero from '../../Components/AboutHero/AboutHero';
import joinBg from '../../Assets/join-bg.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
        <AboutHero />
        <div className="aboutSec">
            <h3>Who We Are</h3>
            {/* <div className='underline'></div> */}
            <p className="aboutSecText">We are a team of experienced professionals with a collective mission – to provide New York residents with high-quality construction and renovation solutions. Our expertise spans various domains within the construction and renovation industry, enabling us to offer comprehensive solutions to meet your unique needs.</p>
        </div>

        <div className="aboutSec">
            <h3>Our Commitment</h3>
            {/* <div className='underline'></div> */}
            <p className="aboutSecText">At Fully Constructed, we hold firm to our commitment to deliver excellence. We understand that construction and renovation projects can present unique challenges, and our commitment is to support you in achieving your vision with tailored solutions. As a locally-focused platform, we take the time to understand your specific needs and project goals.</p>
        </div>

        <div className="aboutSec">
            <h3>Our Mission</h3>
            <p className="aboutSecText">Our mission at Fully Constructed is to empower New York residents and businesses with the right construction and renovation solutions, fostering security and peace of mind. We strive to make the construction and renovation process seamless, stress-free, and rewarding, ensuring that you receive the results you deserve without any compromise.</p>
        </div>

        <div className="aboutSec">
            <h3>Community Involvement</h3>
            <p className="aboutSecText">We believe in giving back to the community that has embraced us so warmly. Through various initiatives, sponsorships, and volunteer work, we actively contribute to the betterment of New York and its residents.</p>
        </div>

        <div className="joinUs">
            <img src={joinBg} alt="Join Us" />
            <p>Join us at Fully Constructed, and experience the difference a dedicated construction and renovation partner can make. Together, we'll bring your construction and renovation dreams to life, safeguarding your vision and aspirations with top-notch services. Expect Excellence, and rest assured, we've got your projects covered.</p>
        </div>
    </>
  )
}

export default AboutUs