import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import './ServiceOverview.css';

const ServiceOverview = ({ sImg, sName, sDesc, sLink, currentPage }) => {
    return (
        <div className='serviceOverview'>
            <div className="sImg">
                <img src={sImg} alt={sName} />
            </div>
            <div className="serviceData">
                <div className="sHead">
                {currentPage === "home" &&<Link to={`services/${sLink}`} className='link' id='nameLink'><h3>{sName}</h3></ Link>}
                {currentPage === "services" &&<Link to={`${sLink}`} className='link' id='nameLink'><h3>{sName}</h3></ Link>}
                </div>

                <div className="sDesc">
                    <p>{sDesc}</p>
                </div>

                {currentPage === "home" &&<Link to={`services/${sLink}`} className='link'><p className="seeMoreBtn">Learn More <AiOutlineDoubleRight /></p></Link>}
                {currentPage === "services" &&<Link to={`${sLink}`} className='link'><p className="seeMoreBtn">Learn More <AiOutlineDoubleRight /></p></Link>}
            </div>
        </div>
    )
}

export default ServiceOverview