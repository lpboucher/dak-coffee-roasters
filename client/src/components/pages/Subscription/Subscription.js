import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionExplain from '../../presentational/Subscriptions/SubscriptionExplain';
import SubscriptionSpecs from '../../presentational/Subscriptions/SubscriptionSpecs';
import SubscriptionContainer from '../../container/Subscriptions/SubscriptionsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896285/Heros/SubscriptionHeader_ikwigv.jpg'

const Subscription = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.subscription",
                loc: "bottom-left",
                height: "50vh"
            }}
        />
        <SubscriptionExplain />
        <SubscriptionSpecs />
        <SubscriptionContainer collection='coffee-subscriptions'/>
        <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
        <NewsletterSignUp />
    </>
    );
};

export default Subscription;