import React from 'react';

import CheckoutSummaryItem from './CheckoutSummaryItem';
import OrderSummaryPrices from '../Cart/OrderSummaryPrices';

import Container from 'react-bootstrap/Container';

const CheckoutSummary = ({items, cart}) => {
    return (
        <Container className="bg-light mt-5 py-5">
            {items.map(item => 
                <CheckoutSummaryItem key={item.id} {...item} />
            )}
            <OrderSummaryPrices {...cart}/>
        </Container>
    );
};

export default CheckoutSummary;