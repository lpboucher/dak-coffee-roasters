import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Hero from '../../presentational/Hero/Hero';
import WholesaleIntro from '../../presentational/Intros/WholesaleIntro';
import PrivateLabelIntro from '../../presentational/Intros/PrivateLabelIntro';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717621/Heros/Header_Wholesale_wtchcg.jpg';

const Wholesale = ({media}) => {
    return (
    <>
    {(media === "medium" || media === "large" || media === "infinity") &&
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.wholesale",
                loc: "bottom-right",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
    }
        <WholesaleIntro />
        <PrivateLabelIntro />
        <NewsletterContainer />
    </>
    );
};

export default withResponsive(Wholesale);