import React, { useState } from 'react';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import './FAQ.css';

const FAQ = ({ data }) => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className='FAQ'>
            {data.map((item, index) => (
                <div key={index} className='singleFAQ'>
                    <div className="fQues" onClick={() => toggleAnswer(index)}>
                        <span id='qIcon'>Q.</span>
                        <h3>{item.question}{visibleIndex === index ? <AiFillCaretUp/> : <AiFillCaretDown />}</h3>
                    </div>

                    {visibleIndex === index && (
                        <div className={`fAns ${visibleIndex === index ? 'open' : ''}`}>
                            <span id='aIcon'>A.</span>
                            <p style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ