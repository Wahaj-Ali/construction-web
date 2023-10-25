import React from 'react';
import './Footer.css';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { BiMap, BiPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerUp">
                <div className="footerColumn socialMedia">
                    <h2>Fully Contructed</h2>
                    <p>At Fully Constructed, we're more than just builders; we're dream weavers dedicated to enhancing the beauty, functionality, and character of Long Island's homes and businesses.</p>
                    <div className="smIcons">
                        <Link to="/" className='fsLink'><CiFacebook /></Link>
                        <Link to="/" className='fsLink'><CiTwitter /></Link>
                        <Link to="/" className='fsLink'><CiInstagram /></Link>
                    </div>
                </div>

                <div className="footerColumn fMenu">
                    <h2>Menu</h2>
                    <div className="links">
                        <Link to="/" className='fLink'><AiFillCaretRight />Home</Link>
                        <Link to="/about_us" className='fLink'><AiFillCaretRight />About Us</Link>
                        <Link to="/services" className='fLink'><AiFillCaretRight />Services</Link>
                        <Link to="/FAQs" className='fLink'><AiFillCaretRight />FAQs</Link>
                    </div>
                </div>

                <div className="footerColumn business">
                    <h2>Business Hours</h2>

                    <div className="hours">
                        <p>Monday - Friday 8:00 Am - 6:00 PM</p>
                        <p>Saturday - Sunday 9:00 AM - 5:00 PM</p>
                    </div>
                </div>

                <div className="footerColumn fContactInfo">
                    <h2>Contact Us</h2>
                    <div className="fContacts">
                        <p><BiMap />Physical address</p>
                        <p><BiPhoneCall />Phone Number</p>
                        <p><MdEmail />Email</p>
                    </div>
                </div>
            </div>
            <div className="footerDown">
                <div className="copyright">
                    <p>Copyright © 2023 Fully Constructed. All rights reserved.</p>
                </div>

                <div className="privacyLinks">
                    <Link to="/" className='fLink'>Privacy Policy</Link>
                    <Link to="/" className='fLink'>Terms of Service</Link>
                    <Link to="/" className='fLink'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer