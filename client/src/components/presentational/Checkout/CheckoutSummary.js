import React from 'react';

import CheckoutSummaryItem from './CheckoutSummaryItem';
import OrderSummaryPrices from '../Cart/OrderSummaryPrices';

import { Box } from 'grommet';

const CheckoutSummary = ({items, cart}) => {
    return (
        <Box pad="large" margin="large" background="lightGrey">
            {items.map(item => 
                <CheckoutSummaryItem key={item.id} {...item} />
            )}
            <Box align="end">
                <OrderSummaryPrices {...cart}/>
            </Box>
        </Box>
    );
};

export default CheckoutSummary;