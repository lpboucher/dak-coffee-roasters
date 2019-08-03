import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';

const CURRENCY_SYMBOLS = {
    EUR: "€",
    USD: "USD $",
    CAD: "CAD $",
    GBP: "£"
}

const WithHover = styled(Box)`
    &:hover {
        background-color: #a96c35;
    }
`

const ProductCardInfo = ({id, name, price, add}) => {
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            <Box flex="grow">
                <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{name}</Text>
                <Text textAlign="center" color="grey">{`${CURRENCY_SYMBOLS[price[0].currency]}${price[0].amount/100}`}</Text>
            </Box>
            <WithHover margin="small" pad="xsmall" background="mainDark" style={{cursor: 'pointer', borderRadius: '4px'}}>
                <Add size="small" onClick={() => add(id, '1')}/>
            </WithHover>
        </Box>
    );
};

export default ProductCardInfo;