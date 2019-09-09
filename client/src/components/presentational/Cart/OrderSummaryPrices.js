import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import OrderSummaryRow from './OrderSummaryRow';

import { Box, Button } from 'grommet';

const CheckoutSummaryPrices = ({total, subTotal, discount, taxes, shipping, withButton=false, t}) => {
    const SYMBOLS = { EUR: '€', CAD: '$'}
    return (
        <Box width="100%" direction="column">
            <OrderSummaryRow label={t("sections.cart.order.subtotal")} price={`${total ? SYMBOLS[total.with_tax.currency] : "€"}${(subTotal/100).toFixed(2)}`} />
            <OrderSummaryRow label={t("sections.cart.order.shipping")} price={`${total ? SYMBOLS[total.with_tax.currency] : "€"}${(shipping).toFixed(2)}`} />
            <OrderSummaryRow label={t("sections.cart.order.taxes")} price={`${total ? SYMBOLS[total.with_tax.currency] : "€"}${taxes.amount_to_collect ? taxes.amount_to_collect : (0).toFixed(2)}`} />
            <OrderSummaryRow label={t("sections.cart.order.discount")} price={`${total ? discount.with_tax.value.formatted : "€0.00"}`} />
            <OrderSummaryRow label={t("sections.cart.order.total")} price={total ? total.with_tax.formatted : "..."} />
            {withButton &&
            <Link to='/checkout'>
                <Button primary fill label={t("sections.cart.order.button")} alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
            </Link>
            }
        </Box>
    );
};

export default withTranslation()(CheckoutSummaryPrices);