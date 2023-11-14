import React from 'react';
import './TermsOfService.css';
import { useEffect } from 'react';

const TermsOfService = () => {

    useEffect(() => {
		document.title = 'Terms of Services -Fully Constructed';
	}, []);

    return (
        <div className='terms_of_service'>
            <h2>Copyright © Fully Constructed. All rights reserved. </h2>
            <h3>All materials, including text, images, designs, and content on this website, are protected by copyright laws and owned or licensed by Fully Constructed. You may not reproduce, distribute, transmit, display, or otherwise use any content from this website without prior written permission from Fully Constructed. Unauthorized use may result in legal action. </h3>
            <h3>Fully Constructed, the Fully Constructed logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Fully Constructed or its affiliates and may not be used without permission. </h3>

            <div className="tos-intro">
                <h2>Privacy Policy and Terms of Service</h2>
                <p>Welcome to Fully Constructed. This page contains our Privacy Policy and Terms of Service. Please read this information carefully to understand how we collect, use, protect, and share your personal data and the terms and conditions that govern your use of this website.</p>
            </div>

            <div className="tos-content">
                <h3>Privacy Policy </h3>
                <p>At Fully Constructed, we are committed to safeguarding your privacy and ensuring the security of your personal information. Our Privacy Policy explains how we collect, use, disclose, and protect your personal data. By using our website, you consent to the practices described in this Privacy Policy. </p>

                <h3>Terms of Service </h3>
                <p>Our Terms of Service outline the rules and regulations governing your use of this website. This includes limitations on liability, disclaimers, intellectual property rights, and other terms and conditions. By accessing or using this website, you agree to abide by these Terms of Service.</p>

                <h3>Contact Us </h3>
                <p>If you have any questions or concerns about our Privacy Policy, Terms of Service, or any other aspect of our website, please (contact us) for further clarification. </p>
                <p>Your use of this website indicates your acceptance of our Privacy Policy and Terms of Service. If you do not agree with any part of these policies, please refrain from using this website. </p>

                <h3>Updates to Policies </h3>
                <p>Fully Constructed reserves the right to make changes to our Privacy Policy and Terms of Service at any time. Any revisions will be effective immediately upon posting on this page. It is your responsibility to regularly review this page to stay informed of any updates. </p>

            </div>
        </div>
    )
}

export default TermsOfService