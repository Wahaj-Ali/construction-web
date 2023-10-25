import React from 'react';
import './FAQ.css';

const FAQ = ({ data }) => {
    return (
        <div className='FAQ' style={{ whiteSpace: 'pre-line' }}>
            {data.map((item, index) => (
                <div key={index} className='singleFAQ'>
                    <div className="fQues">
                        <span id='qIcon'>Q.</span>
                        <h3>{item.question}</h3>
                    </div>

                    <div className="fAns">
                        <span id='aIcon'>A.</span>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FAQ