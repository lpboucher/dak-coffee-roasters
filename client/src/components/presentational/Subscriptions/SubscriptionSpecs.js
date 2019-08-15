import React from 'react';

import SubscriptionSpecsItem from './SubscriptionSpecsItem';

import { Box } from 'grommet';
import { Deliver, Java, Calendar } from 'grommet-icons';

const SubscriptionSpecs = () => {
    return (
        <Box direction="row" pad="medium" background="darkGrey">
            <Box width="33%" pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Deliver />}
                    header="sections.subscription.specs.shipping.title"
                    desc="sections.subscription.specs.shipping.subtitle"
                />
            </Box>
            <Box width="33%" pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Java />}
                    header="sections.subscription.specs.choice.title"
                    desc="sections.subscription.specs.choice.subtitle"
                />
            </Box>
            <Box width="33%" pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Calendar />}
                    header="sections.subscription.specs.commitment.title"
                    desc="sections.subscription.specs.commitment.subtitle"
                />
            </Box>
        </Box>
    );
};

export default SubscriptionSpecs;