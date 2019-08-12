import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import Profiles from '../../presentational/About/Profiles';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Aboutus.jpg';

const About = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.team",
                loc: "top-left",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
        <Profiles />
        <NewsletterSignUp />
    </>
    );
};

export default About;