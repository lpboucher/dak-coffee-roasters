import React from 'react';

import SubscriptionBanner from '../../presentational/Subscriptions/SubscriptionBanner';
import ShopContainer from '../../container/Shop/ShopContainer';

import { Box } from 'grommet';

const Shop = () => {
    return (
    <>
        <Box pad={{top: '208px'}} margin={{bottom: "large", right: "large"}} width="66%">
            <SubscriptionBanner />
        </Box>
        <ShopContainer />
    </>
    );
};

export default Shop;