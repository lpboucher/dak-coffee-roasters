import React from 'react';

import CheckoutSummaryItem from './CheckoutSummaryItem';
import OrderSummaryPrices from '../Cart/OrderSummaryPrices';

import { Box, Heading } from 'grommet';

const CheckoutSummary = ({items, cart}) => {
    return (
        <Box pad={{horizontal: 'large', bottom: 'large', top: 'medium'}} margin={{horizontal: 'large'}} background="darkGrey">
            <Heading level={1} size={"small"} margin={{bottom: 'small'}}>Order Summary</Heading>
            {items.map(item => 
                <CheckoutSummaryItem key={item.id} {...item} />
            )}
            <Box align="end">
                <OrderSummaryPrices withButton={false} {...cart}/>
            </Box>
        </Box>
    );
};

export default CheckoutSummary;