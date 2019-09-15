import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Hero from '../../presentational/Hero/Hero';
import Profiles from '../../presentational/About/Profiles';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717609/Heros/Header_Aboutus_qwdlkf.jpg';

const About = ({media}) => {
    return (
    <>
    {(media === "medium" || media === "large" || media === "infinity") &&
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
    }
        <Profiles />
        <NewsletterContainer />
    </>
    );
};

export default withResponsive(About);