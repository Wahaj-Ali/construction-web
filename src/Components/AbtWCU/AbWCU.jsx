import React from 'react';
import {GrServices} from 'react-icons/gr';
import {GrUserExpert} from 'react-icons/gr';
import {MdHandshake} from 'react-icons/md';
import {VscWorkspaceTrusted} from 'react-icons/vsc';
import {FaUsersRays, FaHandHoldingHand} from 'react-icons/fa6';
import './AbWCU.css';

const AbWCU = () => {
    return (
        <div className="whyChooseUs homeStyle getQuoteStyle" style={{ overflow: "hidden" }}>
            <div className="whyUsTitle">
                <h2>Why Choose Us</h2>
            </div>
            <div className="wcuList">
                <div className="wcuListItem">
                    <div className="icon">
                        <GrServices style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Personalized Service</h4>
                    <p>We believe in building relationships, not just projects. When you choose us, you gain access to a dedicated team that will work closely with you to ensure your projects align perfectly with your vision.</p>
                </div>

                <div className="wcuListItem">
                    <div className="icon">
                        <GrUserExpert style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Local Expertise</h4>
                    <p>With deep roots in New York, we have an in-depth understanding of the region's unique construction and renovation requirements. Our knowledge of the local market enables us to navigate the complexities efficiently.</p>
                </div>

                <div className="wcuListItem">
                    <div className="icon">
                        <MdHandshake style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Trusted Partnerships</h4>
                    <p>We have cultivated strong partnerships with reputable suppliers, contractors, and experts in the construction and renovation industry, allowing us to access a wide range of services and products that meet our clients' diverse needs.</p>
                </div>

                <div className="wcuListItem">
                    <div className="icon">
                        <VscWorkspaceTrusted style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Transparent and Honest</h4>
                    <p> Integrity is at the core of our values. We provide transparent information about projects, processes, and costs, ensuring you can make informed decisions.</p>
                </div>

                <div className="wcuListItem">
                    <div className="icon">
                        <FaUsersRays style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Customer-Centric Approach</h4>
                    <p>Your satisfaction is our top priority. We go the extra mile to ensure you feel heard, supported, and valued throughout your construction and renovation journey.</p>
                </div>

                <div className="wcuListItem">
                    <div className="icon">
                        <FaHandHoldingHand style={{ fontSize: 30, color: '#000' }} />
                    </div>
                    <h4>Unwavering Commitment</h4>
                    <p>Our commitment to Long Island is unwavering. We understand that every project we undertake is a testament to the architectural diversity and vibrant lifestyle of this community. Your vision becomes our mission.</p>
                </div>
            </div>
        </div>
    )
}

export default AbWCU