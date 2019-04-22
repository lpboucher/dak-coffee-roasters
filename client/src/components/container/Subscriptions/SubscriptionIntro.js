import React, { Fragment } from 'react';

import Button from '../../utils/Button';
import SectionTitle from '../../utils/IntroSection/SectionTitle';
import SectionDescription from '../../utils/IntroSection/SectionDescription';
import IntroSection from '../../utils/IntroSection/IntroSection';

const SubscriptionIntro = () => {
    return (
        <Fragment>
            <IntroSection
                bgColor="mid-bg"
                thumb="https://images-na.ssl-images-amazon.com/images/I/61jDQinRyzL._SX425_.jpg"
            >
                <SectionTitle 
                    title="Monthly Coffee Subscription"
                    subtitle="From €15 | Free Shipping"
                />
                <SectionDescription 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Button />
            </IntroSection>
        </Fragment>
    );
};

export default SubscriptionIntro;