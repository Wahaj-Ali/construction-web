import React from 'react';
import FAQ from '../../Components/FAQ/FAQ';
import faqBg from '../../Assets/faq-bg.jpg';
import './FAQs.css';
import { useEffect } from 'react';

const faqData = [
    {
        question: 'What types of construction services does Fully Constructed offer?',
        answer: "Fully Constructed offers a variety of construction services, including: \n" +
        "-  Kitchen Remodeling \n" +
        "-  Bathroom Remodeling \n" +
        "-  Basement Finishing \n" +
        "-  Room Additions \n" +
        "-  Interior Painting \n" +
        "-  Flooring Installation \n" +
        "-  Carpentry and Trim Work" 
        ,
    },
    {
        question: 'How can I request a quote for a construction project?',
        answer:'Requesting a quote is simple. Just fill out our "Get a Quote" form on our website. Provide your contact information and project details, and our team will respond promptly.',
    },
    {
        question: 'What is the typical process for a construction project with Fully Constructed? ',
        answer:'Our construction process generally involves the following steps: \n'+
        "-  Initial Consultation: We discuss your project, preferences, and budget. \n" +
        "-  B Design Phase: Our team creates a detailed design plan. \n" +
        "-  Material Selection: We help you choose materials and finishes. \n" +
        "-  Construction: Our skilled craftsmen start the construction work.  \n" +
        "-  Final Inspection: We conduct a final inspection to ensure quality and satisfaction.",
    },
    {
        question: 'How long does a typical construction project take to complete? ',
        answer:"The duration of a construction project can vary based on project scope and complexity. We'll provide an estimated timeline during the initial consultation.",
    },
    {
        question: 'How is the cost of a construction project determined?',
        answer:"Project cost factors include project scope, materials, labor, and design choices. We will provide a detailed estimate after discussing your specific project needs.",
    },
    {
        question: 'Does Fully Constructed offer financing options for construction projects?',
        answer:"Yes, we offer flexible financing options to make your project more manageable. We can discuss financing options during your initial consultation.",
    },
    {
        question: 'Does Fully Constructed provide post-construction maintenance services?',
        answer:"Yes, we offer post-construction maintenance and support to ensure the longevity of your project. Please contact us for more information.",
    },
    {
        question: 'What kind of warranty is provided for your construction projects?',
        answer:"We stand behind our work and offer warranties on our construction projects. The specific warranty details vary by project, and we will provide you with this information during the project planning phase.",
    },
    {
        question: 'How can I get in touch with Fully Constructed for additional questions or to schedule a consultation? ',
        answer:"You can reach us through our website's contact form, or you can call us at [Phone Number]. We're also available via email at [Email Address]. We look forward to speaking with you and assisting with your construction needs.",
    },
];

const FAQs = () => {

    useEffect(() => {
		document.title = 'FAQs -Fully Constructed';
	}, []);

    return (
        <>
            <div className='insuranceHero'>
                <img src={faqBg} alt="Insurance Carriers" className='insuranceHeroImg' />
                <div className="insuranceHeroDesc">
                    <h1 className="ihTtitle">Frequently Asked Questions</h1>
                    <h3>Quick answers to questions you may have.</h3>
                </div>
            </div>

            <div className='FAQs'>
                <div className="FAQsec">
                    <FAQ data={faqData} />
                </div>
            </div>
        </>
    )
}

export default FAQs