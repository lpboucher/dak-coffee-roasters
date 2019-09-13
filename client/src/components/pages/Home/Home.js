import React, { Suspense, lazy} from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionIntro from '../../presentational/Intros/SubscriptionIntro';
import LimitedEditionsIntro from '../../presentational/Intros/LimitedEditionsIntro';
import Loader from '../../utils/Loader';

const FeaturedProductsContainer = lazy(() => import('../../container/Products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../../container/Newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../../presentational/Intros/ValuesIntro'));
const BrewingIntro = lazy(() => import('../../presentational/Intros/BrewingIntro'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg'

const Home = ({media}) => {
    return (
    <>
        {(media === "medium" || media === "large" || media === "infinity") &&
            <Hero
                bgImage={header}
                overlay={{
                    text: "hero.home",
                    loc: "bottom-left",
                    width: "100vw",
                    height: "40vh"
                }}
            />
        }
            <SubscriptionIntro />
            <LimitedEditionsIntro />
        <Suspense fallback={<Loader />}>
            <FeaturedProductsContainer collection='featured-products'/>
            <NewsletterContainer />
            <ValuesIntro />
            <BrewingIntro />
        </Suspense>
    </>
    );
};

export default withResponsive(Home);