import React, { useState } from 'react';
import './Footer.css';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { BiMap, BiPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { AiFillCaretRight, AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Footer = () => {

    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [showRecaptchaModal, setShowRecaptchaModal] = useState(false);
    const [recaptchaType, setRecaptchaType] = useState('');

    const handleShowPhoneNumberClick = () => {
        setRecaptchaType('phone');
        setShowRecaptchaModal(true);
    };

    const handleShowEmailClick = () => {
        setRecaptchaType('email');
        setShowRecaptchaModal(true);
    };

    const handleRecaptchaChange = (value) => {
        if (value) {
            if (recaptchaType === 'phone') {
                setIsPhoneVerified(true);
            } else if (recaptchaType === 'email') {
                setIsEmailVerified(true);
            }
            setShowRecaptchaModal(false); // Close modal after verification
        }
    };


    return (
        <div className='footer'>
            <div className=" socialMedia">
                <h2>Fully Contructed</h2>
                <p>At Fully Constructed, we're more than just builders; we're dream weavers dedicated to enhancing the beauty, functionality, and character of Long Island's homes and businesses. Our mission is simple yet profound: to empower Long Island communities with exceptional construction solutions while embracing the area's unique architectural essence. </p>
            </div>
            <div className="footerUp">


                <div className="footerColumn fMenu">
                    <h2>Menu</h2>
                    <div className="links">
                        <Link to="/" className='fLink'><AiFillCaretRight />Home</Link>
                        <Link to="/about_us" className='fLink'><AiFillCaretRight />About Us</Link>
                        <Link to="/services" className='fLink'><AiFillCaretRight />Services</Link>
                        <Link to="/FAQs" className='fLink'><AiFillCaretRight />FAQs</Link>
                    </div>
                </div>

                <div className="footerColumn fContactInfo">
                    <h2>Contact Us</h2>
                    <div className="fContacts">
                        <p><BiMap />4 New Hyde Park Rd - 4, Franklin Square, NY 11010</p>
                        <p><AiOutlineClockCircle />9 AM to 6 PM - 7 days a week</p>
                        {isPhoneVerified ? (
                            <p><BiPhoneCall /><a className='fsiLink' href="tel:516-587-0000">516-587-0000</a></p>
                        ) : (
                            <button
                                onClick={handleShowPhoneNumberClick}
                                style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', gap: '6px', padding: '0', fontSize: '18px', fontWeight: '300', fontFamily: 'Gotham' }}
                            >
                                <BiPhoneCall /> Show Phone Number
                            </button>
                        )}
                        {isEmailVerified ? (
                            <p><MdEmail /><a className='fsiLink' href="mailto:zaheer@fullyconstructed.com">zaheer@fullyconstructed.com</a></p>
                        ) : (
                            <button
                                onClick={handleShowEmailClick}
                                style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', gap: '6px', padding: '0', fontSize: '18px', fontWeight: '300', fontFamily: 'Gotham' }}
                            >
                                <MdEmail /> Show Email
                            </button>
                        )}
                    </div>
                </div>

                <div className="smIcons">
                    <Link to="/" ><CiFacebook className='fsLink' /></Link>
                    <Link to="/" ><CiTwitter className='fsLink' /></Link>
                    <Link to="/" ><CiInstagram className='fsLink' /></Link>
                </div>
            </div>
            <div className="footerDown">
                <div className="copyright">
                    <p>Copyright © 2025 Fully Constructed. All rights reserved.</p>
                </div>

                <div className="privacyLinks">
                    <Link to="/privacy-policy" className='fLink pri'>Privacy Policy</Link>
                    {/* <Link to="/" className='fLink pri'>Terms of Service</Link> */}
                    <Link to="/sitemap" className='fLink pri'>Sitemap</Link>
                </div>
            </div>
            {showRecaptchaModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleRecaptchaChange}
            />
            <button
              onClick={() => setShowRecaptchaModal(false)}
              style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    )
}

export default Footer