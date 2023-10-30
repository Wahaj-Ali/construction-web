import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import './GetAQuote.css';

const GetAQuote = () => {

    useEffect(() => {
		document.title = 'Get a Quote -Instantly Insured';
	}, []);

	const [dropdownSelectedOption, setDropdownSelectedOption] = useState('');
	const [radioSelectedOption, setRadioSelectedOption] = useState('');

	const handleDropdownChange = (event) => {
		setDropdownSelectedOption(event.target.value);
	};

	const handleRadioChange = (event) => {
		setRadioSelectedOption(event.target.value);
	};

	//Phone number formatiting
	const [phoneNumber, setPhoneNumber] = useState('');
	// const [submitted, setSubmitted] = useState(false);

	const handlePhoneNumberChange = (event) => {
		const input = event.target.value;
		const formattedInput = input.replace(/\D/g, ''); // Remove non-digit characters

		if (formattedInput.length <= 10) {
			const formattedPhoneNumber = formattedInput.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

			setPhoneNumber(formattedPhoneNumber);
		}
	};


	//ZIP code formatting

	const [zipCode, setZipCode] = useState('');

	const handleZipCodeChange = (event) => {
		const input = event.target.value;
		const formattedInput = input.replace(/\D/g, ''); // Remove non-digit characters

		if (formattedInput.length <= 5) {
			// Limit to 5 digits for zip code
			setZipCode(formattedInput);
		}
	};

	const [state, handleSubmit] = useForm('mqkvnrzl');

	useEffect(() => {
		if (state.succeeded) {
			window.location.href = '/thanks'; 
		}
	  }, [state.succeeded]);

    return (
        <>
            <div className="getAQuote">
                <form action="submit" className="getaQuoteForm" onSubmit={handleSubmit}>

                    <h1>Get your instant quote now!</h1>

                    <div className="contactInfo">
                        <label>Full Name<span className='red'> *</span></label>
                        <input type="text" name="name" placeholder='Please enter your full name as it appears on official documents.' required />
                        <label>Email<span className='red'> *</span></label>
                        <input type="email" name="email" id="" placeholder='Provide a valid email address where we can send your quote and contact you.' required />
                        <label>Phone Number<span className='red'> *</span></label>
                        <input
                            type="text"
                            name='phone'
                            placeholder="Share the best contact number for our agents to reach you."
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            required
                        />
                        {phoneNumber.length < 10 && (
                            <span style={{ color: 'red' }}>Please enter a valid 10 digits phone number</span>
                        )}
                        <label>Address<span className='red'> *</span></label>
                        <div className="address-inputs">
                            <input type="text" name="city" id="" placeholder='City' required />
                            <input type="text" name="state" id="" placeholder='State' required />
                            <input type="text" name="street" id="" placeholder='Street' required />
                            <input
                                type="text"
                                placeholder="ZIP Code"
                                name="zip_code"
                                value={zipCode}
                                onChange={handleZipCodeChange}
                                maxLength="5" // Limit input length to 5 characters
                                required />
                        </div>

                    </div>

                    <div className="selectorsDiv">


                        <div className="dropDown-selector">
                            <label htmlFor="dropdown" >Service Type</label>
                            <select id="dropdown" name="_Insurance Type" value={dropdownSelectedOption} onChange={handleDropdownChange}>
                                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                                <option value="Basement Finishing">Basement Finishing</option>
                                <option value="Room Additions">Room Additions</option>
                                <option value="Interior Painting">Interior Painting</option>
                                <option value="Flooring Installation">Flooring Installation</option>
                                <option value="Carpentry and Trim Work">Carpentry and Trim Work</option>
                            </select>
                        </div>
                        <div className="radio-selector">
                            <label>Preferred Contact Method</label>
                            <label className='radio'>
                                <input
                                    name='contact method'
                                    type="radio"
                                    value="phone"
                                    checked={radioSelectedOption === 'phone'}
                                    onChange={handleRadioChange}
                                />
                                Phone
                            </label>
                            <label className='radio'>
                                <input
                                    name='contact method'
                                    type="radio"
                                    value="email"
                                    checked={radioSelectedOption === 'email'}
                                    onChange={handleRadioChange}
                                />
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="textArea">
                        <textarea name="message" id="getQuoteTextArea" cols="30" rows="10" placeholder="Tell us about any specific project requirements or additional information you'd like us to consider while preparing your quote." />
                    </div>

                    <div className="submit-btn">
                        <button type='submit' className='quote-btn contactBtn getQuoteBtn'>Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default GetAQuote