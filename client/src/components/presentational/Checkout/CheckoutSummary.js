import React from 'react';
import { withTranslation } from 'react-i18next';

import CheckoutSummaryItem from './CheckoutSummaryItem';
import OrderSummaryPrices from '../Cart/OrderSummaryPrices';

import { Box, Heading } from 'grommet';

const CheckoutSummary = ({items, cart, t}) => {
    return (
        <Box pad={{horizontal: 'large', bottom: 'large', top: 'medium'}} margin={{horizontal: 'large'}} background="darkGrey">
            <Heading level={1} size={"small"} margin={{bottom: 'small'}}>{t("sections.cart.order.summary")}</Heading>
            {items.map(item => 
                <CheckoutSummaryItem key={item.id} {...item} />
            )}
            <Box align="end">
                <OrderSummaryPrices withButton={false} {...cart}/>
            </Box>
        </Box>
    );
};

export default withTranslation()(CheckoutSummary);