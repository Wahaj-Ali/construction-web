import React from 'react';
import './Service.css';

const Service = ({ servicesBg, serviceName, sPl, sIntro, serviceFeatures, sEnd }) => {
    return (
        <>
            <div className='insuranceHero'>
                <img src={servicesBg} alt="Insurance Carriers" className='insuranceHeroImg shImg' />
                <div className="insuranceHeroDesc">
                    <h1 className="ihTtitle">{serviceName}</h1>
                    <h3>{sPl}</h3>
                </div>
            </div>
            <div className='serviceIntro'>
                <h4>{sIntro}</h4>
            </div>

            <div className="serviceFeatures">
                {serviceFeatures && serviceFeatures.map((feature, index) => (
                    <div key={index} className="serviceFeature">
                        <div className="heading">
                            <div className="diamond"></div>
                            <h4>{feature.sFheading}</h4>
                        </div>

                        <p>{feature.sFDesc}</p>
                    </div>
                ))}
            </div>


            <div className="sEnding">
                <p>{sEnd}</p>
            </div>
        </>

    )
}

export default Service