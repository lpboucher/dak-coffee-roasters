import React from 'react';

import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';

const CURRENCY_SYMBOLS = {
    EUR: "€",
    USD: "USD $",
    CAD: "CAD $",
    GBP: "£"
}

const ProductCardInfo = ({id, name, price, add}) => {
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            <Box flex="grow">
                <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{name}</Text>
                <Text textAlign="center" color="grey">{`${CURRENCY_SYMBOLS[price[0].currency]}${price[0].amount/100}`}</Text>
            </Box>
            <Box margin="small" pad="xsmall" background="mainDark" style={{cursor: 'pointer', borderRadius: '4px'}}>
                <Add size="small" onClick={() => add(id, '1')}/>
            </Box>
        </Box>
    );
};

export default ProductCardInfo;