import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import Profiles from '../../presentational/About/Profiles';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717609/Heros/Header_Aboutus_qwdlkf.jpg';

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