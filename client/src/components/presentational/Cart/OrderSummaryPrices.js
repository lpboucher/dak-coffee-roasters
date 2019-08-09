import React from 'react';
import { Link } from 'react-router-dom';

import OrderSummaryRow from './OrderSummaryRow';

import { Box, Button } from 'grommet';

const CheckoutSummaryPrices = ({total, discount, withButton=false}) => {
    return (
        <Box width="100%" direction="column">
            <OrderSummaryRow label="Subtotal" price={total.with_tax.formatted} />
            <OrderSummaryRow label="Shipping from" price="Free" />
            <OrderSummaryRow label="VAT 21%" price={"0"} />
            <OrderSummaryRow label="Discount" price={discount ? discount.with_tax.value.formatted : "0"} />
            <OrderSummaryRow label="Total (including taxes)" price={total.with_tax.formatted} />
            {withButton &&
            <Link to='/checkout'>
                <Button primary fill label="ORDER" alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
            </Link>
            }
        </Box>
    );
};

export default CheckoutSummaryPrices;