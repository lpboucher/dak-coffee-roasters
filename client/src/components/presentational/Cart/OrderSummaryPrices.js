import React from 'react';
import { Link } from 'react-router-dom';

import OrderSummaryRow from './OrderSummaryRow';

import { Box, Button } from 'grommet';

const CheckoutSummaryPrices = ({display_price, withButton=true}) => {
    return (
        <Box width="100%" direction="column">
            <OrderSummaryRow label="Subtotal" price={display_price.without_tax.formatted} />
            <OrderSummaryRow label="Shipping from" price="Free" />
            <OrderSummaryRow label="VAT 21%" price={display_price.tax.formatted} />
            <OrderSummaryRow label="Discount" price="3$" />
            <OrderSummaryRow label="Total (including taxes)" price={display_price.with_tax.formatted} />
            {withButton &&
            <Link to='/checkout'>
                <Button primary fill label="ORDER" alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
            </Link>
            }
        </Box>
    );
};

export default CheckoutSummaryPrices;