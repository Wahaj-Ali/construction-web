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
            <div className=" socialMedia">
                    <h2>Fully Contructed</h2>
                    <p>At Fully Constructed, we're more than just builders; we're dream weavers dedicated to enhancing the beauty, functionality, and character of Long Island's homes and businesses. Our mission is simple yet profound: to empower Long Island communities with exceptional construction solutions while embracing the area's unique architectural essence. </p>
                    <div className="smIcons">
                        <Link to="/" className='fsLink'><CiFacebook /></Link>
                        <Link to="/" className='fsLink'><CiTwitter /></Link>
                        <Link to="/" className='fsLink'><CiInstagram /></Link>
                    </div>
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

                <div className="footerColumn business">
                    <h2>Business Hours</h2>

                    <div className="hours">
                        <p>9 AM to 6 PM - 7 days a week</p>
                    </div>
                </div>

                <div className="footerColumn fContactInfo">
                    <h2>Contact Us</h2>
                    <div className="fContacts">
                        <p><BiMap />4 New Hyde Park Rd - 4, Franklin Square, NY 11010</p>
                        <p><BiPhoneCall />(516) 200-4649</p>
                        <p><MdEmail />gc@fullyconstructed.com</p>
                    </div>
                </div>
            </div>
            <div className="footerDown">
                <div className="copyright">
                    <p>Copyright © 2023 Fully Constructed. All rights reserved.</p>
                </div>

                <div className="privacyLinks">
                    <Link to="/privacy-policy" className='fLink pri'>Privacy Policy</Link>
                    {/* <Link to="/" className='fLink pri'>Terms of Service</Link> */}
                    <Link to="/" className='fLink pri'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer