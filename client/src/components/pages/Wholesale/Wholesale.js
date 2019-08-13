import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import WholesaleIntro from '../../presentational/Intros/WholesaleIntro';
import PrivateLabelIntro from '../../presentational/Intros/PrivateLabelIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717621/Heros/Header_Wholesale_wtchcg.jpg';

const Wholesale = () => {
    return (
    <>
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
        <WholesaleIntro />
        <PrivateLabelIntro />
        <NewsletterSignUp />
    </>
    );
};

export default Wholesale;