import React, { useEffect, useState } from 'react';
import { BiMap, BiSolidPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { useForm } from '@formspree/react';
import './ContactUs.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {

    const [state, handleSubmit] = useForm('mzblonpk');
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
                            {/* <p><a className='fsiLink' href="mailto:zaheer@fullyconstructed.com">zaheer@fullyconstructed.com</a></p> */}
                            {isEmailVerified ? (
                                <p><a className='fsiLink' href="mailto:zaheer@fullyconstructed.com">zaheer@fullyconstructed.com</a></p>
                            ) : (
                                <button
                                    onClick={handleShowEmailClick}
                                    style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: '0', fontSize: '14px', color: 'black' }}
                                >
                                    Show Email
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="cDetail">
                        <div className="cIcon">
                            <BiSolidPhoneCall className='cuIcon' />
                        </div>
                        <div className="ciText">
                            <h3>Phone</h3>
                            {/* <a className='fsiLink' href="tel:516-587-0000">516-587-0000</a> */}
                            {isPhoneVerified ? (
                                <p style={{ fontSize: '14px', margin: '0' }}>
                                    <a href="tel:516-587-0000" style={{ color: '#007bff', textDecoration: 'none' }}>516-587-0000</a>
                                </p>
                            ) : (
                                <button
                                    onClick={handleShowPhoneNumberClick}
                                    style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: '0', fontSize: '14px', color: 'black' }}
                                >
                                    Show Phone Number
                                </button>
                            )}
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
        </>

    )
}

export default ContactUs