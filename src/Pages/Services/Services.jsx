import React from 'react';
import kitchen from '../../Assets/Kitchen Remodeling.jpg';
import bath from '../../Assets/Bathroom Remodeling.jpg';
import basement from '../../Assets/Basement Finishing.jpg';
import room from '../../Assets/Room Additions.jpg';
import interior from '../../Assets/Interior Painting.jpg';
import floor from '../../Assets/Flooring Installation.jpg';
import carpentry from '../../Assets/Carpentry and Trim Work.jpg';
import ServiceOverview from '../../Components/ServiceOverview/ServiceOverview';
import servicesBg from '../../Assets/services-bg.jpg';
import './Services.css';

const Services = () => {
    return (
        <>
            <div className='insuranceHero'>
                <img src={servicesBg} alt="Insurance Carriers" className='insuranceHeroImg shImg' />
                <div className="insuranceHeroDesc">
                    <h1 className="ihTtitle">Our Services</h1>
                    <h3>We pride ourselves on our commitment to quality, craftsmanship, and impeccable attention to detail.</h3>
                </div>
            </div>
            <div className="servicesOverview">
                <div className="hsSec">
                    <ServiceOverview sImg={kitchen} currentPage="services" sName="Kitchen Remodeling" sDesc="Showcase your expertise in transforming kitchens, including cabinet installation, countertop upgrades, and layout redesigns." sLink="kitchen-remodeling" />

                    <ServiceOverview sImg={bath} currentPage="services" sName="Bathroom Remodeling" sDesc="Highlight your ability to create beautiful and functional bathrooms through services like tile installation, fixture upgrades, and layout improvements." sLink="bathroom-remodeling" />

                    <ServiceOverview sImg={basement} currentPage="services" sName="Basement Finishing" sDesc="Promote your skills in turning unfinished basements into functional living spaces, such as recreation rooms, home offices, or additional bedrooms." sLink="basement-finishing" />

                    <ServiceOverview sImg={room} currentPage="services" sName="Room Additions" sDesc="Emphasize your ability to expand homes by adding new rooms, whether it's a sunroom, a family room, or an extra bedroom." sLink="room-additions" />

                    <ServiceOverview sImg={interior} currentPage="services" sName="Interior Painting" sDesc="Offer interior painting services to refresh and update the look of a home." sLink="interior-painting" />

                    <ServiceOverview sImg={floor} currentPage="services" sName="Flooring Installation" sDesc="Showcase your expertise in installing various types of flooring, such as hardwood, tile, laminate, or carpet." sLink="flooring-installation" />

                    <ServiceOverview sImg={carpentry} currentPage="services" sName="Carpentry and Trim Work" sDesc="Highlight your craftsmanship in custom carpentry, including trim, crown molding, and built-in cabinets." sLink="carpentary-and-trimwork" />
                </div>
            </div>
        </>
    )
}

export default Services