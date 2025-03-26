import React from 'react';
// import googleLogo from '../../assets/logos/google.svg';
// import zillowLogo from '../../assets/logos/zillow.svg';
import {AiFillStar} from 'react-icons/ai';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TestimonialV2.css';


const testimonials = [
  {
    quote: "I couldn't be happier with the kitchen remodeling project by Fully Constructed. Sarah and her team turned my vision into reality. The attention to detail and craftsmanship are outstanding.",
    person: "John Smith",
  },
  {
    quote: "Fully Constructed exceeded my expectations with their room additions. They seamlessly blended the new space with our existing home. I highly recommend their services.",
    person: "Emily Johnson",
  },
  {
    quote: "The interior painting by Fully Constructed transformed our home. The team was professional, and the results were stunning.",
    person: "David Brown",
  },
  {
    quote: "I'm thrilled with the flooring installation by Fully Constructed. The team was efficient, and the quality of work is impeccable.",
    person: "Lisa Davis",
  },
  {
    quote: "The carpentry and trim work by Fully Constructed added character to our home. Their attention to detail is remarkable.",
    person: "Michael Thompson",
  },
];

const TestimonialV2 = () => {

  const swiperParams = {
    slidesPerView: 1, // Default slides per view (for larger screens)
    spaceBetween: 20,
    // navigation: true,
    speed: 1200,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <div className="testimonial">
      <div className="testHeading">
        <h2>Testimonials</h2>
      </div>

        <div className="testContent">
          <div className="testimonials">
            <Swiper {...swiperParams} modules={[A11y, Autoplay]}>
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-container">


                    <div className="people-quotes">
                      <div className="person-detail">
                        <h4>{testimonial.person}</h4>
                      </div>
                      <div className="stars">
                        <AiFillStar className='starIcon quote' />
                        <AiFillStar className='starIcon quote' />
                        <AiFillStar className='starIcon quote' />
                        <AiFillStar className='starIcon quote' />
                        <AiFillStar className='starIcon quote' />
                      </div>
                      <div className="quote">
                        <p>{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialV2;
