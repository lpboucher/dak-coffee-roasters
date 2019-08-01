import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import thumb from '../../../assets/images/coffeeserver.jpg';

const SubscriptionBanner = () => {
    const intro = 
        <IntroSection 
            heading="Monthly Coffee Subscription" 
            subHeading="From €15   |   Free Shipping   |   Commitment Free"
            description={
                `Have your coffee delivered to your doorstep every month by opting for one of our subscriptions. Choose between our classics or the roaster's choice.`}
            btnLabel="Subscribe"
            link="/subscriptions"
            isSmall={true}
        />
    return (
        <TwoColLayout 
            bgColor="darkGrey"
            left={<FullImg imgLink={thumb}/>}
            right={intro}
            pad={{outer: "large", inner: "medium"}}
        />
    );
};

export default SubscriptionBanner;