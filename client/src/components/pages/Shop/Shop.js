import React, { Component, Fragment } from 'react';

import SubscriptionIntro from '../../presentational/Intros/SubscriptionIntro';
import ShopContainer from '../../container/Shop/ShopContainer';
import Footer from '../../presentational/Footer/Footer';

import { Box } from 'grommet';

class ShopPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Box margin={{top: "large", bottom: "large", right: "large"}} width="75%">
                    <SubscriptionIntro />
                </Box>
                <ShopContainer />
                <Footer />
            </Fragment>
        );
    }
}

export default ShopPage;