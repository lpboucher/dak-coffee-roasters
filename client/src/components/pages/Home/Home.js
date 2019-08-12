import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionIntro from '../../presentational/Intros/SubscriptionIntro';
import LimitedEditionsIntro from '../../presentational/Intros/LimitedEditionsIntro';
import FeaturedProductsContainer from '../../container/Products/FeaturedProductsContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import ValuesIntro from '../../presentational/Intros/ValuesIntro';
import BrewingIntro from '../../presentational/Intros/BrewingIntro';

import header from '../../../assets/images/Header_Mainpage.jpg';

const Home = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.home",
                loc: "bottom-left",
                width: "100vw",
                height: "25vh",
                withOpacity: true
            }}
        />
        <SubscriptionIntro />
        <LimitedEditionsIntro />
        <FeaturedProductsContainer collection='featured-products'/>
        <NewsletterSignUp />
        <ValuesIntro />
        <BrewingIntro />
    </>
    );
};

export default Home;