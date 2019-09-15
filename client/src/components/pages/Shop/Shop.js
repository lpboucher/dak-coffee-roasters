import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import SubscriptionBanner from '../../presentational/Subscriptions/SubscriptionBanner';
import ShopContainer from '../../container/Shop/ShopContainer';

import { Box } from 'grommet';

const Shop = ({media}) => {
    const layout = {
        extraSmall : {padTop: '80px', width: '100%'},
        small : {padTop: '80px', width: '100%'},
        medium : {padTop: '208px', width: '66%'},
        large : {padTop: '208px', width: '66%'},
        infinity : {padTop: '208px', width: '66%'},
    }
    return (
    <>
        <Box pad={{top: layout[media] ? layout[media].padTop : '0px'}} margin={{bottom: "large", right: "large"}} width={layout[media] ? layout[media].width : '100%'}>
            <SubscriptionBanner isMobile={media === "extraSmall" || media === "small"}/>
        </Box>
        <ShopContainer />
    </>
    );
};

export default withResponsive(Shop);