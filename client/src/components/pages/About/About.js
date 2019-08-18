import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import Profiles from '../../presentational/About/Profiles';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717609/Heros/Header_Aboutus_qwdlkf.jpg';

const About = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.team",
                loc: "left",
                height: "50vh",
                width: "50vw",
                withOpacity: false,
                justify: "start"
            }}
        />
        <Profiles />
        <NewsletterContainer />
    </>
    );
};

export default About;