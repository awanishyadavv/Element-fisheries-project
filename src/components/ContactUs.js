import '../components/Style/ContactUs.css';
import React from 'react';

const ContactUs = () => {
    return(
        <div className='contactus-container'>
        <div className='contactus-form'></div>
        <div className='contactus-image'>
        <img src={process.env.PUBLIC_URL + '/images/contact-image.svg'} alt="" />
        </div>
        </div>
    );
}

export default ContactUs;