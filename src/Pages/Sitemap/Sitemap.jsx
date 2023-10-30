import React from 'react';
import './Sitemap.css';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div className="sitemap">
        <div className="sitemapTitle">
          <h1>Site Map</h1>
        </div>

        <div className="siteContent">
          <div className="scItem">
            <h2>MAIN</h2>

            <h3>Home</h3>
            <Link to="/" className='siteLink'>Fully Constructed: Gateway to Building Dreams</Link>
          </div>
        </div>

        <div className="siteContent">
          <div className="scItem">
            <h2>SERVICES</h2>
            <div className="scIsubItem">
              <div className="subItemContent">
                <h3>Services Types</h3>
                <Link to="/services" className='siteLink'>Types of services provided by Fully Constructed</Link>
              </div>
              <div className="subItemContent">
                <h3>KITCHEN REMODELING</h3>
                <Link to="/services/kitchen-remodeling" className='siteLink'>Kitchen Remodeing</Link>
              </div>

              <div className="subItemContent">
                <h3>BATHROOM REMODELING</h3>
                <Link to="/services/bathroom-remodeling" className='siteLink'>Bathroom Remodeing</Link>
              </div>

              <div className="subItemContent">
                <h3>BASEMENT FINISHING</h3>
                <Link to="/services/basement-finishing" className='siteLink'>Basement Finishing</Link>
              </div>

              <div className="subItemContent">
                <h3>ROOM ADDITIONS</h3>
                <Link to="/services/room-additions" className='siteLink'>Room Additions</Link>
              </div>

              <div className="subItemContent">
                <h3>INTERIOR PAINTING</h3>
                <Link to="/services/interior-painting" className='siteLink'>Interior Painting</Link>
              </div>

              <div className="subItemContent">
                <h3>FLOORING INSTALLATION</h3>
                <Link to="/services/flooring-installation" className='siteLink'>Flooring Installation</Link>
              </div>

              <div className="subItemContent">
                <h3>CARPENTRY AND TRIMWORK</h3>
                <Link to="/services/carpentry-and-trimwork" className='siteLink'>Carpentry and Trimwork</Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="siteContent">
          <div className="scItem">
            <h2>CARRIERS</h2>

            <h3>Insurance Carriers</h3>
            <Link to="/insurance_carriers" className='siteLink'>A wide network of top-rated insurance carriers</Link>
          </div>
        </div> */}

        <div className="siteContent">
          <div className="scItem">
            <h2>QUOTES</h2>
            <Link to="/get-a-quote" className='siteLink'>Get a Quote</Link>
          </div>
        </div>

        <div className="siteContent">
          <div className="scItem">
            <h2>CUSTOMER CARE</h2>
            <Link to="/contact_us" className='siteLink'>Contact Us</Link>
          </div>
        </div>

        <div className="siteContent">
          <div className="scItem">
            <h2>FAQS</h2>
            <Link to="/FAQs" className='siteLink'>Frequently Asked Questions</Link>
          </div>
        </div>

        <div className="siteContent">
          <div className="scItem">
            <h2>Sitemap</h2>
            <Link to="/sitemap" className='siteLink'>Sitemap</Link>
          </div>
        </div>
      </div>
  )
}

export default Sitemap