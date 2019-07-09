import React from 'react';

import { Box, Text, TextInput, Button } from 'grommet';

const OrderPromoCode = () => {
    return (
        <Box>
            <Text>PROMO CODE</Text>
            <Box direction="row">
                <TextInput placeholder="Code Here" />
                <Button primary label="ORDER" alignSelf="center" color="darkHighlight" />
            </Box>
            <Text>FREE STANDARD SHIPPING FOR ORDERS OF MORE THAN €25 IN EUROPE AND ON ALL SUBSCRIPTIONS</Text>
        </Box>
    );
};

export default OrderPromoCode;