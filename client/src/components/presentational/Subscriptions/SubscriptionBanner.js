import React from 'react';
import { withTranslation } from 'react-i18next';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const thumb = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/q_100/v1572972636/Intros/BoxSubscription_viuecy.jpg';

const SubscriptionBanner = ({isMobile, currency, t}) => {
    const prices = {EUR: '€25', CAD: '$35'}
    const intro = 
        <IntroSection 
            heading="intros.subscription.title" 
            subHeading="intros.subscription.helper"
            description="intros.subscription.short description"
            btnLabel="intros.subscription.button"
            link="/subscriptions"
            isSmall={true}
            options={{ price: prices[currency] }}
        />
    return (
        <TwoColLayout 
            bgColor="darkGrey"
            left={<FullImg imgLink={thumb} withMinHeight={isMobile}/>}
            right={intro}
            pad={{outer: "small", inner: "medium"}}
        />
    );
};

export default withTranslation()(SubscriptionBanner);