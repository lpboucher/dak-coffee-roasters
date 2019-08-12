import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import OrderSummaryRow from './OrderSummaryRow';

import { Box, Button } from 'grommet';

const CheckoutSummaryPrices = ({total, discount, withButton=false, t}) => {
    return (
        <Box width="100%" direction="column">
            <OrderSummaryRow label={t("sections.cart.order.subtotal")} price={total.with_tax.formatted} />
            <OrderSummaryRow label={t("sections.cart.order.shipping")} price="Free" />
            <OrderSummaryRow label={t("sections.cart.order.taxes")} price={"0"} />
            <OrderSummaryRow label={t("sections.cart.order.discount")} price={discount ? discount.with_tax.value.formatted : "0"} />
            <OrderSummaryRow label={t("sections.cart.order.total")} price={total.with_tax.formatted} />
            {withButton &&
            <Link to='/checkout'>
                <Button primary fill label={t("sections.cart.order.button")} alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
            </Link>
            }
        </Box>
    );
};

export default withTranslation()(CheckoutSummaryPrices);