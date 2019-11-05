import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const introImg = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1568043804/Intros/SubscriptionMain_yhoylm.jpg";

const SubscriptionIntro = ({currency}) => {
    const prices = {EUR: '€25', CAD: '$35'}
    const intro = 
        <IntroSection 
            heading="intros.subscription.title" 
            helperText="intros.subscription.helper"
            description="intros.subscription.description"
            btnLabel="intros.subscription.button"
            link="/subscriptions"
            options={{ price: prices[currency] }}
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={introImg}/>}
            right={intro}
        />
    );
};

export default SubscriptionIntro;