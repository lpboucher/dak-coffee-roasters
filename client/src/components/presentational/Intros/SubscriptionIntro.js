import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const SubscriptionIntro = () => {
    const intro = 
        <IntroSection 
            heading="Monthly Coffee Subscription" 
            helperText="From €15   |   Free Shipping   |   Commitment Free"
            description={
                `Have your coffee delivered to your doorstep every month by opting for one of our subscriptions. Choose between:\n\nOUR CLASSICS: Choose a roast and receive a selection of origin coffees in either filter or espresso roasts (or both, why not!)\n\nTHE ROASTER’S CHOICE: Let the roaster surprise you with his preferred roast of the month. This subscription will offer different assortments of filter/espresso/limited edition roasts, but our roaster never compromises the quality or taste, so this is truly the best way to familiarize yourself with fresh, new coffees!`}
            btnLabel="Subscribe"
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