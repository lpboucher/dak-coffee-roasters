import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const SubscriptionIntro = () => {
    const intro = 
        <IntroSection 
            heading="intros.subscription.title" 
            helperText="intros.subscription.helper"
            description="intros.subscription.description"
            btnLabel="intros.subscription.button"
            link="/subscriptions"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={"https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg"}/>}
            right={intro}
        />
    );
};

export default SubscriptionIntro;