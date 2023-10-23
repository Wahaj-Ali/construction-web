import React from 'react';
import contactBg from '../../Assets/contact-bg.jpg';
import { BiMap, BiSolidPhoneCall } from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <div className='insuranceHero'>
                <img src={contactBg} alt="Insurance Carriers" className='insuranceHeroImg' />
                <div className="insuranceHeroDesc">
                    <h1 className="ihTtitle">About Fully Constructed</h1>
                    <h3>Get in touch.</h3>
                </div>
            </div>

            <div className="formSec">
                <div className="contactDetails">
                    <div className="cDetail">
                        <div className="cIcon">
                            <BiMap className='cuIcon'/>
                        </div>
                        <div className="ciText">
                            <h3>Address</h3>
                            <p>address......</p>
                        </div>
                    </div>

                    <div className="cDetail">
                        <div className="cIcon">
                            <HiOutlineMail className='cuIcon'/>
                        </div>
                        <div className="ciText">
                            <h3>Email</h3>
                            <p>email......</p>
                        </div>
                    </div>

                    <div className="cDetail">
                        <div className="cIcon">
                            <BiSolidPhoneCall className='cuIcon'/>
                        </div>
                        <div className="ciText">
                            <h3>Phone</h3>
                            <p>phone number......</p>
                        </div>
                    </div>
                </div>

                <form action="submit" className="form" >
                    <label htmlFor="" className='contactFormLabel'>Name <span className='red'> *</span></label>
                    <input className='cFContent' name="name" type="text" placeholder='Enter your name' required />
                    <label htmlFor="" className='contactFormLabel'>Email<span className='red'> *</span></label>
                    <input className='cFContent' name="email" type="email" placeholder='Enter your email' required />
                    <label htmlFor="" className='contactFormLabel'>Message</label>
                    <textarea className='cFContent' name="message" id="" cols="30" rows="5" placeholder='Your message...' required></textarea>
                    <button className='quote-btn contactBtn' type='submit'>Submit</button>
                </form>
            </div>


        </>

    )
}

export default ContactUs