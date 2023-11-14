import React from 'react';
import room1 from '../../Assets/room1.jpg';
import room2 from '../../Assets/room2.jpg';
import kitchen1 from '../../Assets/kitchen1.jpg';
import kitchen2 from '../../Assets/kitchen2.jpg';
import paint1 from '../../Assets/paint1.jpg';
import paint2 from '../../Assets/paint2.jpg';
import bath1 from '../../Assets/bath1.jpg';
import bath2 from '../../Assets/bath2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import './InspirationGrid.css';

const InspirationGrid = () => {

    // const [isTall, setIsTall] = useState(false);
    // const handleResize = () => {
    //     setIsTall(window.innerWidth < 786);
    // };

    // useEffect(() => {
     
    //     window.addEventListener('resize', handleResize);

    //     handleResize();


    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <>

            <div className="homeHeading">
                <h2>Inspirational Designs</h2>
            </div>

            <div className='grid-wrapper'>
                <div className='tall'>
                    <img src={room1} alt="Room Model" />
                </div>

                <div className='wide'>
                    <img src={room2} alt="Room Model" />
                </div>

                <div>
                    <img src={kitchen1} alt="Kitchen Model" />
                </div>

                <div className='tall'>
                    <img src={kitchen2} alt="Kitchen Model" />
                </div>

                <div className='big'>
                    <img src={paint1} alt="Paint Model" />
                </div>

                <div>
                    <img src={paint2} alt="Paint Model" />
                </div>

                <div >
                    <img src={bath1} alt="Bath Model" />
                </div>

                <div className='wide'>
                    <img src={bath2} alt="Bath Model" />
                </div>
            </div>
        </>
    )
}

export default InspirationGrid