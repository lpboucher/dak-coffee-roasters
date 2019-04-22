import React, { Fragment } from 'react';

import Hero from '../Hero/Hero';
import SubscriptionIntro from '../Subscriptions/SubscriptionIntro';
import LimitedEditionsIntro from '../LimitedEditions/LimitedEditionsIntro';
import FeaturedProducts from '../../presentational/Products/FeaturedProducts';
import FeaturedProductsContainer from '../../container/Products/FeaturedProductsContainer';
import ProductList from '../Products/ProductList';
import NewsletterSignUp from '../Newsletter/NewsletterSignUp';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <SubscriptionIntro />
            <LimitedEditionsIntro />
            <FeaturedProducts />
            <ProductList />
            <FeaturedProductsContainer />
            <NewsletterSignUp />
        </Fragment>
    );
};

export default Home;