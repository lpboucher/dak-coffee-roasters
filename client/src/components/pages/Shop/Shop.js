import React, { Component } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { getDisplayCurrency } from '../../../ducks/views';

import SubscriptionBanner from '../../presentational/Subscriptions/SubscriptionBanner';
import ShopContainer from '../../container/Shop/ShopContainer';

import { Box } from 'grommet';

class Shop extends Component {
    render() {
        const { media, currency } = this.props;
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
                    <SubscriptionBanner isMobile={media === "extraSmall" || media === "small"} currency={currency}/>
                </Box>
                <ShopContainer />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currency: getDisplayCurrency(state),
    };
}

export default withResponsive(connect(mapStateToProps, null)(Shop));
