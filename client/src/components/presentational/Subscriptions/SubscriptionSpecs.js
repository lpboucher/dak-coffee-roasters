import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import SubscriptionSpecsItem from './SubscriptionSpecsItem';

import { Box } from 'grommet';
import { Deliver, Java, Calendar } from 'grommet-icons';

const SubscriptionSpecs = ({media}) => {
    const layout = {
        extraSmall: {width: '100%'},
        small: {width: '100%'},
        medium: {width: '33%'},
        large: {width: '33%'},
        infinity: {width: '33%'}
    }
    return (
        <Box direction="row" pad="large" background="darkGrey" wrap>
            <Box width={layout[media] ? layout[media].width : '100%'} pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Deliver />}
                    header="sections.subscription.specs.shipping.title"
                    desc="sections.subscription.specs.shipping.subtitle"
                />
            </Box>
            <Box width={layout[media] ? layout[media].width : '100%'} pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Java />}
                    header="sections.subscription.specs.choice.title"
                    desc="sections.subscription.specs.choice.subtitle"
                />
            </Box>
            <Box width={layout[media] ? layout[media].width : '100%'} pad={{horizontal: "xlarge"}}>
                <SubscriptionSpecsItem 
                    icon={<Calendar />}
                    header="sections.subscription.specs.commitment.title"
                    desc="sections.subscription.specs.commitment.subtitle"
                />
            </Box>
        </Box>
    );
};

export default withResponsive(SubscriptionSpecs);