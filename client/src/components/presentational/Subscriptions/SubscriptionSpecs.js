import React from 'react';

import SubscriptionSpecsItem from './SubscriptionSpecsItem';

import { Box } from 'grommet';
import { Deliver, Java, Calendar } from 'grommet-icons';

const SubscriptionSpecs = () => {
    return (
        <Box direction="row" pad="large" background="lightGrey">
            <Box width="33%">
                <SubscriptionSpecsItem 
                    icon={<Deliver />}
                    header="free shipping in EU & North America"
                    desc="on all monthly subscriptions"
                />
            </Box>
            <Box width="33%">
                <SubscriptionSpecsItem 
                    icon={<Java />}
                    header="choose your custom monthly subscription"
                    desc="between our classics or the roaster\'s choice"
                />
            </Box>
            <Box width="33%">
                <SubscriptionSpecsItem 
                    icon={<Calendar />}
                    header="commitment-free"
                    desc="skip a month, cancel or change your subscription preferences at no extra cost"
                />
            </Box>
        </Box>
    );
};

export default SubscriptionSpecs;