import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import EthicsIntro from '../../presentational/Intros/EthicsIntro';
import CoffeeIntro from '../../presentational/Intros/CoffeeIntro';
import PackagingIntro from '../../presentational/Intros/PackagingIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Ourcoffee.jpg';

const Coffee = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.coffee",
                loc: "top-right",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
        <EthicsIntro />
        <CoffeeIntro />
        <PackagingIntro />
        <NewsletterSignUp />
    </>
    );
};

export default Coffee;