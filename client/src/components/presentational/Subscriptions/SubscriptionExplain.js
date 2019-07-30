import React from 'react';

import { Box, Heading, Text } from 'grommet';

const SubscriptionExplain = () => {
    return (
        <Box pad="large">
            <Heading level={1} textAlign="center" margin={{bottom: 'medium'}}>Monthly Coffee Subscription</Heading>
            <Text textAlign="center" margin={{horizontal: 'xlarge'}}>Have your coffee delivered to your doorstep every month by opting for one of our subscriptions. Choose between our classics or the roaster’s choice. We will send you a box of 500g (2 bags of 250g) or 2kg (2 bags of 1kg), and you are free to receive two different varieties of a single one. We always send you the freshest coffees that have been roasted only
days before arriving in your cup.  Great news, EU & North America shipping is included, and you can cancel your subscription  at any time and at no cost.</Text>
        </Box>
    );
};

export default SubscriptionExplain;