import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717615/Heros/Header_Contactus_maq12p.jpg';

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
        <NewsletterContainer /> 
    </>
    );
};

export default Contact;