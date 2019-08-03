import React, { Component, Fragment } from 'react';

import SubscriptionBanner from '../../presentational/Subscriptions/SubscriptionBanner';
import ShopContainer from '../../container/Shop/ShopContainer';

import { Box } from 'grommet';

class ShopPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Box pad={{top: '208px'}} margin={{bottom: "large", right: "large"}} width="66%">
                    <SubscriptionBanner />
                </Box>
                <ShopContainer />
            </Fragment>
        );
    }
}

export default ShopPage;