import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Contactus.jpg';

const Contact = () => {
    return (
    <>
        <Hero 
            bgImage={header}
            overlay={{
                text: "hero.contact",
                loc: "bottom-right",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
        <ContactInfo />
        <NewsletterSignUp /> 
    </>
    );
};

export default Contact;