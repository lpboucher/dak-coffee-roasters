import React from 'react';

import { Box, Image, Text } from 'grommet';

const CheckoutSummaryItem = ({name, quantity, unit_price, image}) => {
    return (
        <Box direction="row" height="100px" align="center" pad={{vertical: 'small'}}>
            <Box width="33%" height="100%">
                <Image fit="contain" src={image.href}/>
            </Box>
            <Box width="66%" direction="row" align="center" justify="between">
                <Box>
                    <Text>{name}</Text>
                    <Text size="small">{`Quantity: ${quantity}`}</Text>
                </Box>
                <Box>
                    <Text size="small">{`${unit_price.amount / 100} ${unit_price.currency}`}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default CheckoutSummaryItem;