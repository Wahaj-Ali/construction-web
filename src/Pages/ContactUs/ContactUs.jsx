import React, { useEffect } from 'react';
import { BiMap, BiSolidPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { useForm } from '@formspree/react';
import './ContactUs.css';

const ContactUs = () => {

    const [state, handleSubmit] = useForm('mzblonpk');

    useEffect(() => {
        if (state.succeeded) {
            window.location.href = '/thanks';
        }
    }, [state.succeeded]);

    useEffect(() => {
		document.title = 'Contact Us - Fully Constructed';
	}, []);

    return (
        <>
            <div className='contactHeading'>
                <h1>Contact Us</h1>
            </div>

            <div className="formSec">

                <div className="contactDetails">
                    <div className="cDetail">
                        <div className="cIcon">
                            <BiMap className='cuIcon' />
                        </div>
                        <div className="ciText">
                            <h3>Address</h3>
                            <p>4 New Hyde Park Rd - 4, Franklin Square, NY 11010</p>
                        </div>
                    </div>

                    <div className="cDetail">
                        <div className="cIcon">
                            <HiOutlineMail className='cuIcon' />
                        </div>
                        <div className="ciText">
                            <h3>Email</h3>
                            <p><a className='fsiLink' href="mailto:gc@fullyconstructed.com">gc@fullyconstructed.com</a></p>
                        </div>
                    </div>

                    <div className="cDetail">
                        <div className="cIcon">
                            <BiSolidPhoneCall className='cuIcon' />
                        </div>
                        <div className="ciText">
                            <h3>Phone</h3>
                            <a className='fsiLink' href="tel:(516) 200-4649">(516) 200-4649</a>
                        </div>
                    </div>
                </div>

                <form action="submit" className="form" onSubmit={handleSubmit}>
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