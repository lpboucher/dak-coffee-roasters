import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import EthicsIntro from '../../presentational/Intros/EthicsIntro';
import CoffeeIntro from '../../presentational/Intros/CoffeeIntro';
import PackagingIntro from '../../presentational/Intros/PackagingIntro';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717617/Heros/Header_Ourcoffee_jzxkoe.jpg';

const Coffee = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.coffee",
                loc: "right",
                height: "50vh",
                width: "50vw",
                withOpacity: false,
                justify: "start"
            }}
        />
        <EthicsIntro />
        <CoffeeIntro />
        <PackagingIntro />
        <NewsletterContainer />
    </>
    );
};

export default Coffee;