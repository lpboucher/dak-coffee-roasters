import React from 'react';
import { withTranslation } from 'react-i18next';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const thumb = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1568043681/Intros/SubscriptionSmallBox_2_vkenoo.jpg';

const SubscriptionBanner = ({t}) => {
    const intro = 
        <IntroSection 
            heading="intros.subscription.title" 
            subHeading="intros.subscription.helper"
            description="intros.subscription.short description"
            btnLabel="intros.subscription.button"
            link="/subscriptions"
            isSmall={true}
        />
    return (
        <TwoColLayout 
            bgColor="darkGrey"
            left={<FullImg imgLink={thumb} withMinHeight={false}/>}
            right={intro}
            pad={{outer: "large", inner: "medium"}}
        />
    );
};

export default withTranslation()(SubscriptionBanner);