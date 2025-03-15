import React from 'react';
import { Hero } from '../../Components/HomeHero/Hero';
import ServiceOverview from '../../Components/ServiceOverview/ServiceOverview';
import kitchen from '../../Assets/Kitchen Remodeling.jpg';
import bath from '../../Assets/Bathroom Remodeling.jpg';
import basement from '../../Assets/Basement Finishing.jpg';
import room from '../../Assets/Room Additions.jpg';
import interior from '../../Assets/Interior Painting.jpg';
import floor from '../../Assets/Flooring Installation.jpg';
import carpentry from '../../Assets/Carpentry and Trim Work.jpg';
import AbWCU from '../../Components/AbtWCU/AbWCU';
import Testimonials from '../../Components/Testimonials/Testimonials';
import TestimonialV2 from '../../Components/Testimonials/TestimonialV2';
import InspirationGrid from '../../Components/InspirationGrid/InspirationGrid';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {

    useEffect(() => {
		document.title = 'Fully Constructed';
	}, []);

    return (
        <>
            <Hero />

            <div className="homeAbout">
                <div className="homeHeading">
                    <h2>Remodeling your Dream home</h2>
                </div>
                <p>At Fully Constructed, we're more than just builders; we're dream weavers dedicated to enhancing the beauty, functionality, and character of Long Island's homes and businesses. Our mission is simple yet profound to empower Long Island communities with exceptional construction solutions while embracing the area's unique architectural essence. With deep roots in Long Island, we understand the local market intricacies, and our community-centric approach involves active participation in local initiatives, enriching the lives of residents. We pride ourselves on craftsmanship excellence, personalized service, transparency, and unwavering commitment to your vision. Join us at Fully Constructed and experience the difference a dedicated construction partner can make. Together, we'll enrich your living spaces, bring your visions to life, and enhance the vibrant tapestry of Long Island. Expect the Unexpected with Fully Constructed. </p>

                {/* <div className="hbLogos">
                    <img className="hbLogo" src={aig} alt="AIG" />
                    <img className="hbLogo" src={aig} alt="AIG" />
                    <img className="hbLogo"src={aig} alt="AIG" />
                    <img className="hbLogo"src={aig} alt="AIG" />
                    <img className="hbLogo" src={aig} alt="AIG" />
                    <img className="hbLogo" src={aig} alt="AIG" />
                </div> */}
            </div>
            
            <InspirationGrid />

            <div className="servicesOverview">
                <div className="homeHeading">
                    <h2>Our Services</h2>
                </div>

                <div className="hsSec">
                    {/* <ServiceOverview sImg={kitchen} currentPage="home" sName="Kitchen Remodeling" sDesc="Showcase your expertise in transforming kitchens, including cabinet installation, countertop upgrades, and layout redesigns." sLink="kitchen-remodeling" />

                    <ServiceOverview sImg={bath} currentPage="home" sName="Bathroom Remodeling" sDesc="Highlight your ability to create beautiful and functional bathrooms through services like tile installation, fixture upgrades, and layout improvements." sLink="bathroom-remodeling"/>

                    <ServiceOverview sImg={basement} currentPage="home" sName="Basement Finishing" sDesc="Promote your skills in turning unfinished basements into functional living spaces, such as recreation rooms, home offices, or additional bedrooms." sLink="basement-finishing"/>

                    <ServiceOverview sImg={room} currentPage="home" sName="Room Additions" sDesc="Emphasize your ability to expand homes by adding new rooms, whether it's a sunroom, a family room, or an extra bedroom." sLink="room-additions" /> */}

                    <ServiceOverview sImg={interior} currentPage="home" sName="Interior Painting" sDesc="Offer interior painting services to refresh and update the look of a home." sLink="interior-painting"/>

                    <ServiceOverview sImg={floor} currentPage="home" sName="Flooring Installation" sDesc="Showcase your expertise in installing various types of flooring, such as hardwood, tile, laminate, or carpet." sLink="flooring-installation"/>

                    <ServiceOverview sImg={carpentry} currentPage="home" sName="Carpentry and Trim Work" sDesc="Highlight your craftsmanship in custom carpentry, including trim, crown molding, and built-in cabinets." sLink="carpentry-and-trimwork"/>
                </div>
            </div>
            <TestimonialV2 />
            <AbWCU />
        </>
    )
}

export default Home